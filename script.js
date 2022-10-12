
var form= document.querySelector('form')
console.log(form)
var typeInCity=document.getElementById("typeInCity")
console.log(typeInCity)
var btnSubmit=document.getElementById("btnSubmit")
var todaysForecast= document.getElementById("current-forecast")
console.log(btnSubmit)
console.log(todaysForecast)
var resultsElement=document.getElementById("results")
console.log(results)


function displayForecast(event){
    event.preventDefault()

    console.log(typeInCity.value)
    var cityName=typeInCity.value
    console.log(cityName)

//cityName variable for city

fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&limit=1&appid=1955f906c0c9c29af2c80c9f214c9aa4')
.then(function(response){
    console.log(response)
    if(response.status===200){
      return response.json () 
    }else if(response.status===404){
        console.log("not found")
    }
})
.then(function(data){
console.log(data)

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={1955f906c0c9c29af2c80c9f214c9aa4}
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
var longitude=data[0].lon
var latitude= data[0].lat
console.log(longitude)
console.log(latitude)
return 

})


fetch('https://api.openweathermap.org/data/3.0/onecall?lat='+latitude+'&lon='+longitude+'&exclude={part}&appid=1955f906c0c9c29af2c80c9f214c9aa4')
.then(function(response){
    console.log(response)
    if(response.status===200){
      return response.json () 
    }else if(response.status===404){
        console.log("not found")
    }
})
.then(function(data){
    console.log(data)
    var h2=document.createElement("h2")
    var img=document.createElement("img")
    
// h2.textContent=data.
// img.src=data.

})
}
form.addEventListener('submit',displayForecast)




//https://api.openweathermap.org/data/2.5/weather?lat={43.0389N}&lon={87.9065W}&appid={1955f906c0c9c29af2c80c9f214c9aa4}
//1955f906c0c9c29af2c80c9f214c9aa4