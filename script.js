//USE LOCAL STORAGE TO GET PAST SEARCHES!!!!!
//localStorage.set(xxx, data)
//localStorage.get(xxx)

// trim and make lowercase
// var pokemonName=nameInput.value.trim().toLowerCase()
// console.log(pokemonName)

//1955f906c0c9c29af2c80c9f214c9aa4
var form = document.querySelector("form");
console.log(form);
//var buttonGroup=document.getElementById("list-group")
//console.log(buttonGroup)
var input = document.getElementById("typeInCity"); /*value of input-city name */

var ul = document.getElementById("list-group");

var btnSubmit = document.getElementById("btnSubmit");
var todaysForecast = document.getElementById("current-forecast");

var resultsElement = document.getElementById("results");

var currentWeather = document.getElementById("current-forecast");

var dayOne = document.getElementById("col-1");

var dayTwo = document.getElementById("col-2");

var dayThree = document.getElementById("col-3");

var dayFour = document.getElementById("col-4");

var dayFive = document.getElementById("col-5");

var searchHistory = JSON.parse(localStorage.getItem("search")) || [];


//   var ul0e = document.createElement("li");  //empty---uv data
//       console.log(ul0e)
//       var ul1e = document.createElement("li");  //empty---uv data
//       console.log(ul1e)
//       var ul2e = document.createElement("li");  //empty---uv data
//       console.log(ul2e)
//       var ul3e = document.createElement("li");  //empty---uv data
//       console.log(ul3e)
//       var ul4e = document.createElement("li");  //empty---uv data
//       console.log(ul4e)
//       var ul5e = document.createElement("li");  //empty---uv data
//       console.log(ul5e)

//       currentWeather.append(ul0e);
//       currentWeather.append(ul1e);
//       currentWeather.append(ul2e);
//       currentWeather.append(ul3e);
//       currentWeather.append(ul4e);
//       currentWeather.append(ul5e);

//       dayOne.append(ul0e);
//       dayOne.append(ul1e);
//       dayOne.append(ul2e);
//       dayOne.append(ul3e);
//       dayOne.append(ul4e);
//       dayOne.append(ul5e);
      
// })



//<li class="list-group-item">
// <a href="LINKLINKLINK" target="_blank">cCITYNAME</a>
//</li>

function placeInSearchButton(cityName) {
  // var mostRecentSearched = input.value
  // console.log(mostRecentSearched);
  // var searchedArr = []
  // searchedArr.push(mostRecentSearched)
  // console.log(searchedArr)

  console.log(cityName);
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=1955f906c0c9c29af2c80c9f214c9aa4&units=imperial"
  )
    .then(function (response) {
      /*function for api call */ console.log(response);
      if (response.status === 200) {
        console.log(input.value);
        /*checks for successful api call */
        return response.json();
      } else if (response.status === 404) {
        console.log("not found");
        console.log(response.json());
      }
    })

    .then(function (data) {


    })
}
function getWeather(cityName) {
  /*all event listeners get an event parameter by default that you can use*/
  console.log(input.value); /*value of typeInCity input */
  var cityName = input.value;
  console.log(cityName);
  dayOne.innerHTML = ""
  dayTwo.innerHTML = ""
  dayThree.innerHTML = ""
  dayFour.innerHTML = ""
  dayFive.innerHTML = ""
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=1955f906c0c9c29af2c80c9f214c9aa4&units=imperial"
    )
    .then(function (response) {
    console.log(response)
      // if (response.status === 200) {
      //   /*checks for successful api call */
      //  return response.json();
      // } else if (response.status === 404) {
      //   alert('City Not Found')
      //   console.log("not found");
      //   response.json();
      // }
    .then(function (data) {
      /*returns data from api call */ console.log(data);
      var latitude=data.city.coord.lat
      var longitude=data.city.coord.lon

  console.log(latitude)
  console.log(longitude)

  let anotherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude={part}&appid=dda3f6a7395a24638c90c44f55f1fb16"
  console.log('Response body of outer "url":');
  console.log(JSON.stringify(data) + '\n\n');

  fetch(anotherUrl)
    .then(function (response) {
      response.json()
    .then(function (data2) {
        console.log('Response body of inner "anotherUrl":');
        console.log(JSON.stringify(data2) + '\n\n');
        console.log(data2)
        console.log(data2.current.uvi)
      });
    }).catch(function () {
      console.log('NO GO!');
    });
  });
 })
.catch(function (error) {
  console.log('Request failed', error);
// });
      // console.log(data.city.coord.lat)
      // var latitude=data.city.coord.lat
      // console.log(latitude)
      // console.log(data.city.coord.lon)
      // var longitude=data.city.coord.lon
      // console.log(longitude)
//////////////////
// var latitude=data.city.coord.lat

// var anotherURL="https://api.openweathermap.org/data/3.0/onecall?lat="+latitude+"&lon="+longitude+"&exclude={part}&appid=dda3f6a7395a24638c90c44f55f1fb16"
// console.log(anotherURL)
//  return fetch(anotherURL)
// // console.log(data)
// // console.log(anotherURL.data)
//     })
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(data){
//       console.log(data)
    

//////////////////////////
      currentWeather.innerHTML = ""
      var ul0 = document.createElement("ul");
      var ul0a = document.createElement("li");
      console.log(ul0a)
      var ul0b = document.createElement("li");
      console.log(ul0b)
      var ul0c = document.createElement("li");
      console.log(ul0c)
      var ul0d = document.createElement("li");
      console.log(ul0d)
      // var ul0e = document.createElement("li");  //empty---uv data
      // console.log(ul0e)
      var ul0f = document.createElement("li");
      console.log(ul0f)
      var img0a = document.createElement("img");
      console.log.apply(img0a)
      //var img0b = document.createElement("img");
      ul0.textContent = data.city.name;
      ul0a.textContent = data.list[0].dt_txt;
      
      
      img0a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[0].weather[0].icon +
      "@2x.png";
      console.log(img0a.src)
      console.log(data.list[0].weather[0].icon)
      data.list[0].weather[0].icon; 
      console.log(data.list[0].weather[0].icon)
      
      
      ul0b.textContent = "Hightemp " + data.list[0].main.temp;
      ul0c.textContent = "Humidity % " + data.list[0].main.humidity;
      ul0d.textContent = "Wind Speed " + data.list[0].wind.speed;
      // h3e.textContent=data.list[0].
      ul0f.textContent = "Conditions " + data.list[0].weather[0].description;
      currentWeather.append(ul0); /*add element to DOM */
      currentWeather.append(ul0a);
      currentWeather.append(ul0b);
      currentWeather.append(ul0c);
      currentWeather.append(ul0d);
      // currentWeather.append(ul0e);
      currentWeather.append(ul0f);
      currentWeather.append(img0a);
      
      var ul1 = document.createElement("ul");
      var ul1a = document.createElement("li");
      var ul1b = document.createElement("li");
      var ul1c = document.createElement("li");
      var ul1d = document.createElement("li");
      // var ul1e = document.createElement("li");
      var ul1f = document.createElement("li");
      var img1a = document.createElement("img");
      //var img1b = document.createElement("img");
      ul1.textContent = data.city.name; /*add data to element */
      ul1a.textContent = data.list[2].dt_txt;
      img1a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[2].weather[0].icon +
      "@2x.png";
      
      console.log(img1a.src)
      console.log(data.list[1].weather[0].icon)
      ul1b.textContent = "Hightemp " + data.list[2].main.temp;
      ul1c.textContent = "Humidity % " + data.list[2].main.humidity;
      ul1d.textContent = "Wind Speed " + data.list[2].wind.speed;
      // h3e.textContent=data.list[0].
      ul1f.textContent = "Conditions " + data.list[2].weather[0].description;
      dayOne.append(ul1); /*add element to DOM */
      dayOne.append(ul1a);
      dayOne.append(ul1b);
      dayOne.append(ul1c);
      dayOne.append(ul1d);
      // dayOne.append(ul1e);
      dayOne.append(ul1f);
      dayOne.append(img1a);
      
      var ul2 = document.createElement("ul");
      var ul2a = document.createElement("li");
      var ul2b = document.createElement("li");
      var ul2c = document.createElement("li");
      var ul2d = document.createElement("li");
      // var ul2e = document.createElement("li");
      var ul2f = document.createElement("li");
      var img2a = document.createElement("img");
      //var img2b = document.createElement("img");
      ul2.textContent = data.city.name; /*add data to element */
      ul2a.textContent = data.list[10].dt_txt;
      
      
      img2a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[10].weather[0].icon +
      "@2x.png";
      console.log(img2a.src)
      console.log(data.list[2].weather[0].icon)
      data.list[10].weather[0].icon; 
      console.log(data.list[0].weather[0].icon)
      
      
      ul2b.textContent = "Hightemp " + data.list[10].main.temp;
      ul2c.textContent = "Humidity % " + data.list[10].main.humidity;
      ul2d.textContent = "Wind Speed " + data.list[10].wind.speed;
      // h3e.textContent=data.list[0].
      ul2f.textContent = "Conditions " + data.list[10].weather[0].description;
      dayTwo.append(ul2); /*add element to DOM */
      dayTwo.append(ul2a);
      dayTwo.append(ul2b);
      dayTwo.append(ul2c);
      dayTwo.append(ul2d);
      // dayTwo.append(ul2e);
      dayTwo.append(ul2f);
      dayTwo.append(img2a);
      
      var ul3 = document.createElement("ul");
      var ul3a = document.createElement("li");
      var ul3b = document.createElement("li");
      var ul3c = document.createElement("li");
      var ul3d = document.createElement("li");
      // var ul3e = document.createElement("li");
      var ul3f = document.createElement("li");
      var img3a = document.createElement("img");
      //var img3b = document.createElement("img");
      ul3.textContent = data.city.name; /*add data to element */
      ul3a.textContent = data.list[18].dt_txt;
      
      
      img3a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[18].weather[0].icon +
      "@2x.png";
      console.log(img3a.src)
      console.log(data.list[18].weather[0].icon)
      
      
      // img3a.src = data.list[18].weather[0].icon;
      
      
      ul3b.textContent = "Hightemp " + data.list[18].main.temp;
      ul3c.textContent = "Humidity % " + data.list[18].main.humidity;
      ul3d.textContent = "Wind Speed " + data.list[18].wind.speed;
      // h3e.textContent=data.list[0].
      ul3f.textContent = "Conditions " + data.list[18].weather[0].description;
      dayThree.append(ul3); /*add element to DOM */
      dayThree.append(ul3a);
      dayThree.append(ul3b);
      dayThree.append(ul3c);
      dayThree.append(ul3d);
      // dayThree.append(ul3e);
      dayThree.append(ul3f);
      dayThree.append(img3a);
      
      var ul4 = document.createElement("ul");
      var ul4a = document.createElement("li");
      var ul4b = document.createElement("li");
      var ul4c = document.createElement("li");
      var ul4d = document.createElement("li");
      // var ul4e = document.createElement("li");
      var ul4f = document.createElement("li");
      var img4a = document.createElement("img");
      //var img4b = document.createElement("img");
      ul4.textContent = data.city.name; /*add data to element */
      ul4a.textContent = data.list[26].dt_txt;
      // img4a.src = data.list[0].weather[0].icon;
      
      img4a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[26].weather[0].icon +
      "@2x.png";
      console.log(img3a.src)
      console.log(data.list[26].weather[0].icon)
      
      ul4b.textContent = "Hightemp " + data.list[26].main.temp;
      ul4c.textContent = "Humidity % " + data.list[26].main.humidity;
      ul4d.textContent = "Wind Speed " + data.list[26].wind.speed;
      // h3e.textContent=data.list[0].
      ul4f.textContent = "Conditions " + data.list[26].weather[0].description;
      dayFour.append(ul4); /*add element to DOM */
      dayFour.append(ul4a);
      dayFour.append(ul4b);
      dayFour.append(ul4c);
      dayFour.append(ul4d);
      // dayFour.append(ul4e);
      dayFour.append(ul4f);
      dayFour.append(img4a);
      
      var ul5 = document.createElement("ul");
      var ul5a = document.createElement("li");
      var ul5b = document.createElement("li");
      var ul5c = document.createElement("li");
      var ul5d = document.createElement("li");
      // var ul5e = document.createElement("li");
      var ul5f = document.createElement("li");
      var img5a = document.createElement("img");
      //var img5b = document.createElement("img");
      ul5.textContent = data.city.name; /*add data to element */
      ul5a.textContent = data.list[34].dt_txt;
      
      img5a.src =
      "https://openweathermap.org/img/wn/" +
      data.list[34].weather[0].icon +
      "@2x.png";
      console.log(img3a.src)
      console.log(data.list[34].weather[0].icon)
      
      // img5a.src = data.list[0].weather[0].icon;
      ul5b.textContent = "Hightemp " + data.list[34].main.temp;
      ul5c.textContent = "Humidity % " + data.list[34].main.humidity;
      ul5d.textContent = "Wind Speed " + data.list[34].wind.speed;
      // h3e.textContent=data.list[0].
      ul5f.textContent = "Conditions " + data.list[34].weather[0].description;
      dayFive.append(ul5); /*add element to DOM */
      dayFive.append(ul5a);
      dayFive.append(ul5b);
      dayFive.append(ul5c);
      dayFive.append(ul5d);
      // dayFive.append(ul5e);
      dayFive.append(ul5f);
      dayFive.append(img5a);
    });  //)
    input.value = "";
    }
  
  // ////////////////////////////////////////
  // //ONE CALL 3.0 API FOR UV INDEX ONLY!!!
  // fetch("https://api.openweathermap.org/data/3.0/onecall?lat="+ latitude +"&lon="+ longitude +"&exclude={part}&appid=dda3f6a7395a24638c90c44f55f1fb16"
  // )
  // .then(function(response){
  //   return response.json()
  // })
  // .then(function(data){
  //   var ul0e = document.createElement("li");  //empty---uv data
  //       console.log(ul0e)
  //       var ul1e = document.createElement("li");  //empty---uv data
  //       console.log(ul1e)
  //       var ul2e = document.createElement("li");  //empty---uv data
  //       console.log(ul2e)
  //       var ul3e = document.createElement("li");  //empty---uv data
  //       console.log(ul3e)
  //       var ul4e = document.createElement("li");  //empty---uv data
  //       console.log(ul4e)
  //       var ul5e = document.createElement("li");  //empty---uv data
  //       console.log(ul5e)
  
  //       currentWeather.append(ul0e);
  //       currentWeather.append(ul1e);
  //       currentWeather.append(ul2e);
  //       currentWeather.append(ul3e);
  //       currentWeather.append(ul4e);
  //       currentWeather.append(ul5e);
  
  //       dayOne.append(ul0e);
  //       dayOne.append(ul1e);
  //       dayOne.append(ul2e);
  //       dayOne.append(ul3e);
  //       dayOne.append(ul4e);
  //       dayOne.append(ul5e);
        
  // })
  
  // //////////////////////////////////////////////
  
  function handleSubmit(event) {
    event.preventDefault();
    var cityName = input.value;
  searchHistory.push(cityName);
  localStorage.setItem("search", JSON.stringify(searchHistory));

  placeInSearchButton(cityName);
  getWeather(cityName);
  renderHistory()
}
form.addEventListener(
  "submit",
  handleSubmit
); /*when submit is hit it runs the getWeather function */


function renderHistory() {
  // ul.innerHTML = ""
  for(let i = 0; i < searchHistory.length; i++) {
    var previousItem = document.createElement("input")
    previousItem.setAttribute("readonly", true)
    // This is going to replace the value of the new "input" to which ever previous search the user clicks on in the list of previous searched citys
    previousItem.setAttribute("value", searchHistory[i])
    previousItem.setAttribute("type", "text")
    previousItem.addEventListener("click", function() {
      placeInSearchButton(previousItem.value)
      getWeather(previousItem.value)
    })
  }
  ul.append(previousItem)
}
//form.addEventListener('submit',placeInSearchButton)

// var buttonGroup=document.getElementById("list-group")

// console.log("list-group")
// var btn1= document.createElement("button")
// btn1.textContent=input
// console.log(btn1)
// buttonGroup.append(btn1)

// cityBtn.addEventListener('click',function(){
//   if(count<4){
//     count++
//     cityBtn.textContent=input
//     localStorage.setItem("cityBtn",cityBtn)
//   }
// })

localStorage.setItem("cityBtn0", "search[0]");
localStorage.setItem("cityBtn1", "search[1]");
localStorage.setItem("cityBtn2", "searchHistory");
localStorage.setItem("cityBtn3", "input");
localStorage.setItem("cityBtn4", "input");

//  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 16,cityid: '2643743',appid: '1955f906c0c9c29af2c80c9f214c9aa4',units: 'metric',containerid: 'openweathermap-widget-16',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
