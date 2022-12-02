<template>
  <div class="card text-white card-bg" :style="background: url('http://localhost:1337' + p.headerImg.url)">
    <!-- <img class="card-img card-height" :src="'http://localhost:1337' + p.headerImg.url" :alt="p.headerImg.name"> -->
    <div class="card-body">
      <h4 class="card-title bg-text">{{ p.title }}</h4>
    </div>
  </div>
</template>


<script>
import { Post } from '../models/Post.js';

export default {
  props: {
    p: { type: Post, required: true }
  },
  setup() {
    return {
      compu
    }
  }
}
</script>


<style lang="scss" scoped>
// .card-bg {
//   background-image: url('http://localhost:1337' +p.headerImg.url);
// }

.bg-text {
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>