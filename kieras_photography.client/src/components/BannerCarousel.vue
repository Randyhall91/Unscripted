<template>
  <div id="bannerCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">

    <div class="carousel-inner carouselSize py-3">
      <div v-for="img in firstImg" class="carousel-item active">
        <img :src="(baseURL + img.medium.url)" class="carousel-img img-fluid" :alt="img.medium.name">
        <div class="carousel-text">
          <h1>Treasure Valley</h1>
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
      <!-- <div v-for="img in carousel" :key="img.medium.name" class="carousel-item">
        <img :src="baseURL + img.medium.url" class="carousel-img img-fluid" :alt="img.medium.name">
        <div class="carousel-text">
          <h1>Treasure Valley</h1>
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div> -->

    </div>
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
    <!-- TODO speed up carousel timer -->
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { baseURL } from '../env.js';
import { Imgs } from '../models/Imgs.js';



export default {

  props: {
    carousel: { type: Array, required: true }
  },
  setup(props) {
    baseURL
    return {
      baseURL,
      firstImg: props.carousel.slice(0, 1),
      // firstImg: computed(() => AppState.homePage.carousel[0]),
      // imgs: props.carousel

    }
  }
}
</script>


<style lang="scss" scoped>
.carouselSize {
  height: 80vh;
}

.carousel-text {
  position: absolute;
  right: 15%;
  top: 30%;
  left: 15%;
  color: white;
  text-shadow: 2px 2px #181818;
  text-align: center;
}
</style>