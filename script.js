//

//1955f906c0c9c29af2c80c9f214c9aa4
var form = document.querySelector("form");
console.log(form);
var typeInCity = document.getElementById("typeInCity"); /*value of input-city name */
console.log(typeInCity);
var btnSubmit = document.getElementById("btnSubmit");
var todaysForecast = document.getElementById("current-forecast");
console.log(btnSubmit);
console.log(todaysForecast);
var resultsElement = document.getElementById("results");
console.log(results);
var currentWeather = document.getElementById("current-forecast")
console.log(currentWeather)
var dayOne = document.getElementById("col-1")
console.log(dayOne)
var dayTwo = document.getElementById("col-2")
console.log(dayTwo)
var dayThree = document.getElementById("col-3")
console.log(dayThree)
var dayFour = document.getElementById("col-4")
console.log(dayFour)
var dayFive = document.getElementById("col-5")
console.log(dayFive)

function getWeather(event) {   /*all event listeners get an event parameter by default that you can use*/
  event.preventDefault(); /*preventDefault on the event, prevents page from refreshing when submit is hit */

  console.log(typeInCity.value);   /*value of typeInCity input */
  var cityName = typeInCity.value;
  console.log(cityName);

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid=1955f906c0c9c29af2c80c9f214c9aa4&units=imperial"
    
  )
    .then(function (response) {                  /*function for api call */
      console.log(response);
      if (response.status === 200) {              /*checks for successful api call */
        return response.json();
      } else if (response.status === 404) {
        console.log("not found");
        console.log(response.json())
      }
    })
    .then(function (data) {                        /*returns data from api call */
      console.log(data);

      
     
      var ul0=document.createElement("ul")
      var ul0a = document.createElement("li");
      var ul0b= document.createElement("li")
      var ul0c= document.createElement("li")
      var ul0d= document.createElement("li")
      var ul0e= document.createElement("li")
      var ul0f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul0.textContent=data.city.name                      /*add data to element */
      ul0a.textContent=data.list[0].dt_txt
       img1.src=data.list[0].weather[0].icon
       ul0b.textContent=data.list[0].main.temp
       ul0c.textContent=data.list[0].main.humidity
       ul0d.textContent=data.list[0].wind.speed
      // h3e.textContent=data.list[0].
       currentWeather.append(ul0)                        /*add element to DOM */
       currentWeather.append(ul0a)
       currentWeather.append(ul0b)
       currentWeather.append(ul0c)
       currentWeather.append(ul0d)
       currentWeather.append(ul0e)

       var ul1=document.createElement("ul")
      var ul1a = document.createElement("li");
      var ul1b= document.createElement("li")
      var ul1c= document.createElement("li")
      var ul1d= document.createElement("li")
      var ul1e= document.createElement("li")
      var ul1f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul1.textContent=data.city.name                      /*add data to element */
      ul1a.textContent=data.list[10].dt_txt
       //img1.src=data.list[10].weather[10].icon
       ul1b.textContent=data.list[10].main.temp
       ul1c.textContent=data.list[10].main.humidity
       ul1d.textContent=data.list[10].wind.speed
      // h3e.textContent=data.list[0].
      dayOne.append(ul1)                        /*add element to DOM */
      dayOne.append(ul1a)
      dayOne.append(ul1b)
      dayOne.append(ul1c)
      dayOne.append(ul1d)
      dayOne.append(ul1e)

       var ul2=document.createElement("ul")
      var ul2a = document.createElement("li");
      var ul2b= document.createElement("li")
      var ul2c= document.createElement("li")
      var ul2d= document.createElement("li")
      var ul2e= document.createElement("li")
      var ul0f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul2.textContent=data.city.name                      /*add data to element */
      ul2a.textContent=data.list[18].dt_txt
       //img1.src=data.list[18].weather[0].icon
       ul2b.textContent=data.list[18].main.temp
       ul2c.textContent=data.list[18].main.humidity
       ul2d.textContent=data.list[18].wind.speed
      // h3e.textContent=data.list[0].
       dayTwo.append(ul2)                        /*add element to DOM */
       dayTwo.append(ul2a)
       dayTwo.append(ul2b)
       dayTwo.append(ul2c)
       dayTwo.append(ul2d)
       dayTwo.append(ul2e)

       var ul3=document.createElement("ul")
      var ul3a = document.createElement("li");
      var ul3b= document.createElement("li")
      var ul3c= document.createElement("li")
      var ul3d= document.createElement("li")
      var ul3e= document.createElement("li")
      var ul3f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul3.textContent=data.city.name                      /*add data to element */
      ul3a.textContent=data.list[26].dt_txt
      // img1.src=data.list[26].weather[0].icon
       ul3b.textContent=data.list[26].main.temp
       ul3c.textContent=data.list[26].main.humidity
       ul3d.textContent=data.list[26].wind.speed
      // h3e.textContent=data.list[0].
       dayThree.append(ul3)                        /*add element to DOM */
       dayThree.append(ul3a)
       dayThree.append(ul3b)
       dayThree.append(ul3c)
       dayThree.append(ul3d)
       dayThree.append(ul3e)

       var ul4=document.createElement("ul")
      var ul4a = document.createElement("li");
      var ul4b= document.createElement("li")
      var ul4c= document.createElement("li")
      var ul4d= document.createElement("li")
      var ul4e= document.createElement("li")
      var ul4f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul4.textContent=data.city.name                      /*add data to element */
      ul4a.textContent=data.list[0].dt_txt
      // img1.src=data.list[0].weather[0].icon
       ul4b.textContent=data.list[0].main.temp
       ul4c.textContent=data.list[0].main.humidity
       ul4d.textContent=data.list[0].wind.speed
      // h3e.textContent=data.list[0].
       dayFour.append(ul4)                        /*add element to DOM */
       dayFour.append(ul4a)
       dayFour.append(ul4b)
       dayFour.append(ul4c)
       dayFour.append(ul4d)
       dayFour.append(ul4e)

       var ul5=document.createElement("ul")
      var ul5a = document.createElement("li");
      var ul5b= document.createElement("li")
      var ul5c= document.createElement("li")
      var ul5d= document.createElement("li")
      var ul5e= document.createElement("li")
      var ul5f= document.createElement("li")
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      ul5.textContent=data.city.name                      /*add data to element */
      ul5a.textContent=data.list[0].dt_txt
      // img1.src=data.list[0].weather[0].icon
       ul5b.textContent=data.list[0].main.temp
       ul5c.textContent=data.list[0].main.humidity
       ul5d.textContent=data.list[0].wind.speed
      // h3e.textContent=data.list[0].
       dayFive.append(ul5)                        /*add element to DOM */
       dayFive.append(ul5a)
       dayFive.append(ul5b)
       dayFive.append(ul5c)
       dayFive.append(ul5d)
       dayFive.append(ul5e)



      //  var h2 = document.createElement("h2");
      //  var h3a= document.createElement("h3")
      //  var h3b= document.createElement("h3")
      //  var h3c= document.createElement("h3")
      //  var h3d= document.createElement("h3")
      //  var h3e= document.createElement("h3")
      //  var img1 = document.createElement("img");
      //  var img2 = document.createElement("img");
      //   h2.textContent=data.city.name                      /*add data to element */
      //   h3a.textContent=data.list[0].dt_txt
      //   img1.src=data.list[0].weather[0].icon
      //   h3b.textContent=data.list[0].main.temp
      //   h3c.textContent=data.list[0].main.humidity
      //   h3d.textContent=data.list[0].wind.speed
      //  // h3e.textContent=data.list[0].
      //  console.log(h3b.textContent)
      //  console.log(h3c.textContent)
      //  console.log(img1.src)
      //  console.log(h3d.textContent)
        
 
      //   currentWeather.append(h2)                        /*add element to DOM */
      //   //resultsElement.append(h3)
      //   currentWeather.append(h3a)
      //   currentWeather.append(h3b)
      //   currentWeather.append(h3c)
      //   currentWeather.append(h3d)
      //   currentWeather.append(h3e)
       
      //  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 16,cityid: '2643743',appid: '1955f906c0c9c29af2c80c9f214c9aa4',units: 'metric',containerid: 'openweathermap-widget-16',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
     
       
       })
       

     
}
      
        
      

         
      //    })
        
           //h2.textContent=data.
//           // img.src=data.
//         });
//     });
// }
 form.addEventListener('submit',getWeather) /*when submit is hit it runs the getWeather function */
        
