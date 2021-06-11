const path=require('path')
const express = require('express')
const app  = express()
const hbs=require('hbs')

// console.log('die name is:::'+__dirname)

const directorypath = path.join(__dirname, '../public')
console.log(directorypath)
 app.use(express.static(directorypath))  //u can specify the file name in browser url 

// app.get('',(req,res)=>{
//     res.send('<h1>Hello Express!!</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send('Help page!')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>about page!</h1>')
// })
//------------------------------------------------------------------------------------
// app.set('view engine',hbs)

// app.get('',(req,res)=>{
//     res.render('index')
// })



app.get('/weather',(req,res)=>{
    res.send({
        forecast:{
            lattitude:40,
            longitude:-75,
            location:'anaparthi'
        },
        weather:{
            report:'Partly cloudy'
        }
    })
})

app.listen(3000,()=>{
    console.log('server listens to port 3000')
})