let weather = {
    apiKey: "05039b2746ad356a693042aa7f1e361f",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { temp_min, temp_max } = data.main
      const { pressure } = data.main
      const { sunrise } = data.sys
      const { sunset } = data.sys
      const { country } = data.sys
    //   let a = new Date(sunrise);
    //   let sunr = a.toLocaleTimeString(country)
      const sunr =(sun) => {
          let a = new Date(sun) ;
          let b = a.toLocaleTimeString(country);
          return b
      } ;
      const suns =(s) => {
        let c = new Date(s) ;
        let d= c.toLocaleTimeString(country);
        return d
    }

      document.querySelector(".city").innerText = name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".temp_min").innerText = 
        "Min: " + temp_min + "°C" ;
      document.querySelector(".temp_max").innerText = 
        "Max: " + temp_max + "°C" ;
        document.querySelector(".pressure").innerText = 
        "pressure: " + pressure + " hPa" ;
        document.querySelector(".sunrise").innerText = 
        "sunrise: " + sunr(sunrise)  ;
        document.querySelector(".sunset").innerText = 
        "sunset: " + sunr(sunset) ;
      
      document.querySelector(".weather").classList.remove("loading");
      // document.body.style.backgroundImage =
      //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  

  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Bangkok");

