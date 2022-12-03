<template>
  <div class="component">
    {{ post }}

  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';

export default {
  setup() {
    const route = useRoute()
    async function setActivePost() {
      try {
        await blogService.getBlogPostbyId(route.params.id)
      }
      catch (error) {
        Pop.error('[setActivePost]', error)
      }
    }

    onMounted(() => {
      setActivePost()
    })
    return {
      post: computed(() => AppState.activePost)

    }
  }
}
</script>


<style lang="scss" scoped>

</style>