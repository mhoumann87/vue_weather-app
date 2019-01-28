<template>
  <section>
    <div class="home" v-if="forecast">
      <div class="box">
        <div class="box__header">
          <h2>Location</h2>
        </div>
        <div class="box__content">
          <div>
            <p class="space">The weather for:</p>
            <p>{{city}}</p>
          </div>

          <div class="search">
            <p class="find">Find a city</p>
            <div class="search-box">
              <input
                v-model="location"
                type="text"
                name="search"
                id="search"
                placeholder="City, Country"
              >
              <button @click="updateLocation" type="submit">Find</button>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box__header">
          <h2>Current Weather</h2>
        </div>
        <div class="box__content">
          <div class="icon">
            <img :src="icons[forecast.currently.icon]">
          </div>
          <p>Weather right now: {{forecast.currently.summary}}</p>
          <p>Temperature: {{forecast.currently.temperature}}</p>
          <p>Wind speed: {{forecast.currently.windSpeed}} km/h</p>
        </div>
      </div>
      <div class="box">
        <div class="box__header">
          <h2>Forecast</h2>
        </div>
        <div class="box__content">
          <p class="space">The next few days:</p>
          <p>{{forecast.daily.summary}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import API from "@/lib/API";
import clearDay from "@/assets/images/clear-day.svg";
import clearNight from "@/assets/images/clear-night.svg";
import rain from "@/assets/images/rain.svg";
import snow from "@/assets/images/snow.svg";
import sleet from "@/assets/images/sleet.svg";
import wind from "@/assets/images/wind.svg";
import fog from "@/assets/images/fog.svg";
import cloudy from "@/assets/images/cloudy.svg";
import partlyCloudyDay from "@/assets/images/partly-cloudy-day.svg";
import partlyCloudyNight from "@/assets/images/partly-cloudy-night.svg";

export default {
  name: "home",
  data() {
    return {
      forecast: null,
      icons: {
        "clear-day": clearDay,
        "clear-night": clearNight,
        rain: rain,
        snow: snow,
        sleet: sleet,
        wind: wind,
        fog: fog,
        cloudy: cloudy,
        "partly-cloudy-day": partlyCloudyDay,
        "partly-cloudy-night": partlyCloudyNight
      },
      city: null,
      location: "",
      lat: "37.8267",
      long: "-122.4233"
    };
  },
  mounted() {
    this.$getLocation().then(coords => {
      this.lat = coords.lat;
      this.long = coords.lng;
      API.getForecast(this.lat, this.long).then(result => {
        this.forecast = result;
        this.getPlace(result.latitude, result.longitude);
      });
    });
  },
  methods: {
    updateLocation() {
      API.getCoords(this.location).then(result => {
        console.log(result);
        API.getForecast(
          result.results[0].geometry.lat,
          result.results[0].geometry.lng
        ).then(result => {
          this.forecast = result;
          this.getPlace(result.latitude, result.longitude);
        });
      });
    },
    getPlace(lat, lgn) {
      API.getCity(lat, lgn).then(result => {
        if (result.results[0].components.city) {
          this.city = result.results[0].components.city;
        } else {
          this.city = result.results[0].components.village;
        }
      });
    }
  }
};
</script>

<style scoped>
.home {
  padding: 8em 4em 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.box {
  background-color: #78c2ad;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 0 2px rgba(53, 53, 53, 0.2);
}

.box__header {
  background-color: #74bca8;
  width: 100%;
  padding: 0.5em 0;
  font-size: 1.4em;
  text-align: center;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0.7em;
  box-shadow: 0 1px 0 0 rgba(53, 53, 53, 0.3);
}

.box__content {
  padding: 1em;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

.icon {
  width: 50%;
  margin: 0 auto 0.5em;
}
.img {
  display: block;
  width: 100%;
}

.space {
  margin-bottom: 0.5em;
}

.search {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
}

.find {
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.search-box {
  display: flex;
  align-items: center;
}

.search input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  background: #78c2ad;
  border-bottom: 2px solid white;
  outline: none;
  color: white;
}

.search input::placeholder {
  color: white;
}

.search button {
  margin-left: 0.5em;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid white;
  color: white;
  background: #78c2ad;
  outline: none;
}

pre {
  grid-column: 1 / -1;
}
</style>
