const path=require('path')
const express = require('express')
const app  = express()

const port=process.env.PORT || 3000

const hbs=require('hbs')

//for weather app-------------------------------
const geocode=require('./utils/es6geocode')
const forecast=require('./utils/es6forecast')

console.log('die name is:::'+__dirname)

//define paths for express config
const directorypath = path.join(__dirname, '../public')
const tempalte_path = path.join(__dirname, '../templates/views')
const partial_path=path.join(__dirname,'../templates/partials')

console.log(directorypath)

//setup handlebars engine and views location
app.set('views',tempalte_path); 
app.set('view engine', 'hbs')
hbs.registerPartials(partial_path)
app.use(express.static(directorypath))  //u can specify the file name in browser url (or)static dir 2 serve


app.get('',(req,res)=>{
    res.render('index',{
        name:'keerthi',
        title:'Weather page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        author:'Andrew Mead',
        source:'Udemy Course',
        title:'About page'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
       message:'this is the basic example of hbs code for showing html page in help route',
       title:'Help page'
    })
})

//send adress in browser
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            Error:'Please provide adress in request'
        })
    }
        const address=req.query.address
        // res.send({
        //     forecast:'its snowing',
        //     location:'Andra pradesh',
        //   //  location:location
        //     address:req.query.address
        // })

            //for chaing---------------------
            geocode(address,(error,{latitude,longitude,location} = {})=>{  //----passing that addresss as location-------
                if(error){
                    return res.send({
                        Error:error
                    })
                }
               forecast(latitude,longitude,(error,forecast='')=>{
                   if(error){
                    return res.send({
                        Error:error
                    })
                   }
                //    console.log('location isssss:',data.location)
                //    console.log('weather report:',forecast)

                   res.send({
                        forecast:forecast,
                        location,
                        address:req.query.address
                    })
               })
            
            })
   
})


app.get('/help/*',(req,res)=>{
    res.render('404page',{
        error:'Help article not found'
     })
})

app.get('*',(req,res)=>{
    res.render('404page',{
        error:'404 page not found'
     })

})


app.listen(port,()=>{
    console.log('server listens to port 3000')
})