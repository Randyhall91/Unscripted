<template>
  <div id="bannerCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
    <!-- <div class="carousel-indicators">
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> -->
    <div class="carousel-inner carouselSize px-5 py-3">
      <div class="carousel-item active">
        <img src="../Public/HomePage/hotAirBallonLittleBoy.JPG" class="carousel-img img-fluid"
          alt="Hot Air Ballon with a Little Boy">
        <div class="carousel-text">
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="../Public/HomePage/littleGirlBeachMountains.JPG" class="img-fluid"
          alt="Little Girl at the Beach with Mountains">
        <div class="carousel-text">
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="../Public/HomePage/littleGirlByTheLake.JPG" class="img-fluid" alt="Little Girl By the Lake">
        <div class="carousel-text">
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<script>

export default {
  setup() {
    return {
      // pictures: [{ img: require('../Public/HomePage/littleGirlByTheLake.jpg') }]
    }
  }
}
</script>


<style lang="scss" scoped>
.carouselSize {
  max-height: 80vh;
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