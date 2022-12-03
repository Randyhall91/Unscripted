<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-5">
        <BannerCarousel />
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-12 text-center">
        <p class="barlow fs-1">
          Photography is an Interpretation of Reality Skimmed off the Surface of Life.
        </p>
      </div>
    </div>
    <div class="row mt-5 pb-5 pe-3">
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <h2>Why Pick Me?</h2>
        <p class="px-5 fragment">
          I have a passion for getting families photographed in the moment. I want those real smiles, the ones that show
          the love
          your family has for each other. The more you look at each other and not at the camera the better. In a photo
          session
          with me there will be laughs and giggles and running around like kids on a playground. Expect games of tag,
          water gun or
          snowball battles and tickle fights. Or if you want to go on an adventure, we can do that too. Hiking, swimming
          or just
          plain exploring. If you want to get professional fun photos of your family having a good time, then you're in
          the right
          place. When you walk in the room and see these photos on your wall, they will make you smile. You're welcome!
        </p>
      </div>
      <div class="col-lg-6 kiera-pic">
        <!-- <img class="img-fluid kiera-height" src="HomePage/Page/women laughing.jpg" alt="Man playing with Child"> -->
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <img class="img-fluid" src="HomePage/Page/0G8A0090.jpg" alt="Man playing with Child">
        <!-- <img class="img-fluid" src="HomePage/Page/trees with carvings.JPG" alt="trees with carvings"> -->
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center pt-3">
        <h2>Why LifeStyle Photography</h2>
        <p class="px-5 fragment">
          Lifestyle Photography is about capturing families interacting with each other in an artistic way.
          Photographing families
          playing, dancing, chasing, and looking at each other rather than looking at me. This produces photographs that
          are
          family centric. When you see these photos, you see a family that is in love with each other. You can't help
          but smile
          when you see these photos. If they are not of you and of another family, you still see them and think of your
          family
          because they cause a visceral reaction. These types of photos are not just to document what a family looked
          like at a
          specific moment in time but also how they were together as a family. Through the years family dynamics change
          and
          through lifestyle photography you can capture that dynamic. These sessions are about you and your family. If
          your family
          doesn't like dancing, then don't dance. If you really like tickle fights, then do that. If you like to play
          tag, then do
          that. Lifestyle photography is the perfect way to remember life how it was at that specific moment in time.
          This is the
          time to act like yourselves so that you can look back and remember what you were like and most importantly
          what your
          kids were like. Who doesn't what to remember those special moments with their kids and spouses through the
          years of this
          crazy journey we call life?

        </p>
      </div>
    </div>
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-lg-6">
        <h2 class="text-center lobster">Let's Chat</h2>
      </div>
      <div class="col-12 mt-3">
        <p class="fragment text-center">
          Find out when my books open for the next quarter! There are limited spots available! Don't miss out on
          documenting your family this year!
        </p>

      </div>
    </div>
    <div class="row lets-chat-text p-3 text-center mb-5">
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
    </div>



  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { pageContentService } from '../services/PageContentService.js';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import BannerCarousel from '../components/BannerCarousel.vue';
import UploadPicture from '../components/UploadPicture.vue';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getHomePageContent() {
      try {
        await pageContentService.getHomePageContent()
      }
      catch (error) {
        Pop.error('[getHomePageContent]', error)
      }
    }
    onMounted(() => {
      getHomePageContent()
    })
    return {
      home: computed(() => AppState.homePage)
    };
  },
  components: { BannerCarousel, UploadPicture }
}
</script>

<style scoped lang="scss">
.kiera-pic {
  background-image: url('HomePage/Page/women laughing.jpg');
  height: 70vh;
  background-position: 3rem;
  background-position-x: -10rem;
  background-position-y: -24rem;
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
