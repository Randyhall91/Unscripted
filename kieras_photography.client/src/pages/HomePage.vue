<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12 mt-5 mx-0 px-0">
        <BannerCarousel />
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-12 text-center">
        <p class="barlow fs-1">
          {{ home.quote }}
        </p>
      </div>
    </div>
    <div class="row mt-5 pb-5 pe-3">
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <h2 class="ps-2">{{ home.aboutHeader }}</h2>
        <p class="px-5 fragment">
          {{ home.aboutContent }}
        </p>
      </div>
      <!-- <div :style="{ backgroundImg: `url(${(home.mugshot)})` }" class="col-lg-6 mugshot">
      </div> -->
      <div class="col-lg-6 d-flex justify-content-center">
        <img class="mugshot" :src="home.mugshot">
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <img class="img-fluid" :src="(home.lifeStylePicture)">
        <!-- <img class="img-fluid" src="HomePage/Page/trees with carvings.JPG" alt="trees with carvings"> -->
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center pt-3">
        <h2>{{ home.aboutLifeStyleHeader }}</h2>
        <p class="px-5 fragment">
          {{ home.aboutLifeStyleContent }}

        </p>
      </div>
    </div>
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-lg-6">
        <h2 class="text-center lobster">{{ home.letsChatHeader }}</h2>
      </div>
      <div class="col-12 mt-3">
        <p class="fragment text-center">
          {{ home.letsChatContent }}
        </p>

      </div>
    </div>
    <!-- <div class="row lets-chat-text p-3 text-center mb-5">
      <div class="col-3">
        <div class="border border-dark p-3 bg-white d-flex justify-content-center align-items-center lets-chat-box">

          <p>What is the difference between tradidtional & lifestyle photography</p>
        </div>
      </div>
      <div class="col-3">
        <div class="border border-dark p-3 bg-white d-flex justify-content-center align-items-center lets-chat-box">

          <p>How to pick the best photographer for your family</p>
        </div>
      </div>
      <div class="col-3">
        <div class="border border-dark p-3 bg-white d-flex justify-content-center align-items-center lets-chat-box">

          <p>What is lifystyle photography</p>
        </div>
      </div>
      <div class="col-3">
        <div class="border border-dark p-3 bg-white d-flex justify-content-center align-items-center lets-chat-box">

          <p>What </p>
        </div>
      </div>
    </div> -->



  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { pageContentService } from '../services/PageContentService.js';
import { AppState } from '../AppState.js';
import BannerCarousel from '../components/BannerCarousel.vue';
import UploadPicture from '../components/UploadPicture.vue';
import Pop from '../utils/Pop.js';
import { onMounted } from 'vue';

export default {
  setup() {
    async function getHomePage() {
      try {
        await pageContentService.getHomePageContent()
      }
      catch (error) {
        Pop.error('[getHomePageContent]', error)
      }
    }
    onMounted(() => getHomePage())
    return {
      home: computed(() => AppState.homePage),
      // mugshot: AppState.homePage.mugshot.url

    };
  },
  components: { BannerCarousel, UploadPicture }
}
</script>

<style scoped lang="scss">
.mugshot {
  // background-image: url('HomePage/Page/women laughing.jpg');
  max-height: 70vh;
  width: auto;
  // background-position: 3rem;
  // background-position-x: -10rem;
  // background-position-y: -24rem;
}

.lets-chat-text {
  font-size: large;
}

.lets-chat-box {
  min-height: 20vh;
}

@media screen and (max-width: 1000px) {

  .lets-chat-text {
    font-size: medium;
  }
}
</style>
