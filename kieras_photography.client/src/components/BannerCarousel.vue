<template>
  <div id="bannerCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner carouselSize px-5 py-3">
      <div class="carousel-item active">
        <img src="../Public/HomePage/hotAirBallonLittleBoy.JPG" class="d-block w-100 img-fluid"
          alt="Hot Air Ballon with a Little Boy">
        <div class="carousel-caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
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
    {{ pictures }}
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
</style>