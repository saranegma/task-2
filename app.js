const request = require('request')

// lec 5

// const url="https://api.weatherapi.com/v1/current.json?key=e97aa427e818479fb9141538240203&q=egypt"

/*request({url},(error,response)=>{
const data1=JSON.parse(response.body)
//console.log(data1)
console.log(data1.location.name)
console.log(data1.current.condition.text)
console.log("the temperture right now is" +" "+ data1.current.temp_c)

})*/

/* request({url, json:true},(error,response)=>{
    
    console.log(response.body.location.name)
    console.log(response.body.current.condition.text)
    console.log("the temperture right now is" +" "+ response.body.current.temp_c)
    
    })*/

   /* const url="https://api.weatherapi.com/v1/current.json?key=e97aa427e818479fb9141538240203&q=mmkln"
    request({url, json:true},(error,response)=>{
        if(error){
        console.log("the site can not be reached")}
    else if(response.body.error){
        console.log(response.body.error.message) }
        else{
            console.log(response.body.location.name)
    console.log(response.body.current.condition.text)
    console.log("the temperture right now is" +" "+ response.body.current.temp_c)
    
        }
    }) */

   
 //lec 6 
/*
 const geoCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

 request({url:geoCodeUrl, json:true},(error,response)=>{
    if(error){console.log("the site can not be reached")}
    else if(response.body.message){
        console.log(response.body.message)}
        else if(response.body.features.length==0){
            console.log("can not find location") }
    else{
        const longtitude= response.body.features[0].center[0]
        const latitude=response.body.features[0].center[1]
        console.log(longtitude,latitude)
    }

    })
*/

const geocode=require("./dataprocess/geocode")
const forcast=require("./dataprocess/forcast")
 
const country = process.argv[2]


geocode(country, (error,data)=>{
    console.log("the error is", error)
    console.log("the data is", data)
forcast(data.latitude , data.longtitude,(error,data)=>{
    console.log("the error is", error)
    console.log("the data is", data)
}

)
})