<template>
  <h1>Blog Page</h1>
</template>


<script>
import { blogService } from "../services/BlogService";
import Pop from "../utils/Pop";
import {onMounted} from "vue";

export default {
  setup() {
    
    async function getBlogPosts(){
      try {
        await blogService.GetBlogPosts()
      } catch (error) {
        Pop.error('[getBlogPosts]', error)
      }
    }
    onMounted(()=>{
      getBlogPosts()
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>