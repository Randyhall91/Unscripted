<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- Video player goes here or we move it down below the form -->
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-6">
        <ContactForm />
      </div>

    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-6 text-center">
        <p class="tangerine fs-1">
          We live so briefly in time before returning to eternity... We should document every chance we can for the sake
          of those who remain...
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 p-0">
        <img class="landscape" src="foothills.jpg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <!-- TODO Insert Blog tiles here -->
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { formService } from '../services/FormService.js'
// import { VideoPlayer } from '../components/VideoPlayer.vue'
export default {
  // name: 'Video',
  // components: {
  //   VideoPlayer
  // },
  // data() {
  //   return {
  //     videoOptions: {
  //       autoplay: false,
  //       controls: true,
  //       sources: [
  //         {
  //           src:
  //             '/path/to/video.mp4',
  //           type: 'video/mp4'
  //         }
  //       ]
  //     }
  //   };
  // },

}
</script>


<style lang="scss" scoped>
.landscape {
  max-height: 40vh;
  min-width: 100vw;
  object-fit: cover;
}
</style>