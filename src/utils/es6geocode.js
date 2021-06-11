const request=require('request')
const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoia2VlcnRoYW5hdmFudW11IiwiYSI6ImNrb21pazRvNjAzZjkyb285bzJzcXVoeXcifQ.HanYCNuCm62AGYgEVozBiA&limit=1'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('unable to conect mapbox api',undefined)
        }else if(body.features.length === 0){
            callback('unable to find location,try another search',undefined)
        }else{
           // console.log(responce.body.features[0].center)
            callback(undefined,{
                latitude :body.features[0].center[1],
                longitude:body.features[0].center[0],
                location :body.features[0].place_name
            })
        }
    })
}

module.exports = geocode