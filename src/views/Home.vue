<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row mt-3">
      <div class="card text-white bg-primary col-3">
        <div class="card-header">Location</div>
        <div class="card-body">
          <h4 class="card-title">{{forecast.timezone}}</h4>
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-primary col-3 ml-5">
        <div class="card-header">Current Weather</div>
        <div class="card-body">
          <div class="icon-box">
            <h4 class="card-title">
              <i class="fas fa-sun"></i>
            </h4>
          </div>
          <p class="card-text">{{forecast.currently.summary}}</p>
          <p>Temprature: {{forecast.currently.temperature}}</p>
        </div>
      </div>
    </div>
    <pre>{{forecast}}</pre>
  </div>
</template>

<script>
import API from "@/lib/API";

export default {
  name: "home",
  data() {
    return {
      forecast: {}
    };
  },
  mounted() {
    API.getForecast().then(result => {
      this.forecast = result;
    });
  }
};
</script>

<style scoped>
.icon-box {
  width: 100%;
  display: flex;
  justify-content: center;
}

i {
  font-size: 6rem;
  display: block;
}
</style>
