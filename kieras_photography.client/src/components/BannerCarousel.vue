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
        <img
          src="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg"
          class="d-block w-100 img-fluid"
          alt="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg">
        <div class="carousel-caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg"
          class="d-block w-100"
          alt="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg">
      </div>
      <div class="carousel-item">
        <img
          src="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg"
          class="d-block w-100"
          alt="https://www.worthingtonfordnewcars.com/blogs/2493/wp-content/uploads/2019/04/long-beach-scenic-view-300x168.jpg">
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
    return {}
  }
}
</script>


<style lang="scss" scoped>
.carouselSize {
  max-height: 80vh;
}
</style>