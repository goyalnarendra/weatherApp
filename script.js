
const locationName = document.getElementById("locationName");
const radioButtons = document.querySelectorAll('input[name="temp_units"]');
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const weather_description = document.getElementById("weather_description");
const weather_image = document.getElementById("weather_image");
const displayCard = document.getElementById("displayCard");

const url = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = YOUR_API_KEY;


async function fetchWeather(){
   let units;
   const userInput = document.getElementById("user-input").value;
   for (const radioButton of radioButtons) {
    if (radioButton.checked) {
         units = radioButton.value;
        break;
    }
}
   const res = await fetch(url+userInput+"&appid="+apiKey+"&units="+units)
   const data = await res.json(); 

   locationName.textContent= await data.name + ","+ data.sys.country; 
   temp.textContent = data.main.temp;
   feels_like.textContent = data.main.feels_like;
   temp_max.textContent = data.main.temp_max;
   temp_min.textContent = data.main.temp_min; 
   weather_description.textContent = data.weather[0].description; 

   const weatherIcon = data.weather[0].icon;
   const imgUrl = "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
   weather_image.src = imgUrl;
              
   displayCard.style.display = "block";

   

}



// .then(res =>{
//                   if (!res.cod == 200) { 
//                          throw new Error('Network response was not ok'); 
//                      } 
//                        return res.json(); 
//                    })
//                    .then(data =>{
//                      console.log(data)
//                     return temp = 
//                     document.getElementById("location").innerHtml= data.main.temp;
//                     weatherData=data;
//                     console.log(weatherData);
//                    });