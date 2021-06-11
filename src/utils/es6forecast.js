const request=require('request')
const forecast=(lattitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=5ed2071c7cc930e323e2dd43ceba774b&query='+lattitude+','+longitude+'&units=f'

    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('unable to conect weather app',undefined)
        }else if(body.error){
            callback('invalid location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0] +'.the temparatue is'+ body.current.temperature + 'and its feels like'+ body.current.feelslike + '% of rain')
        }
    })
}

module.exports=forecast