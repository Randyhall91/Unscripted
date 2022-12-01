import { Post } from "../models/Post";
import { api } from "./AxiosService"




class BlogService{


  async GetBlogPosts(){
  const res =  await api.get('api/blog-posts', {
    params: 
    {'populate': ["Post.Header","Post.AdditionalImgs"]},
  })
console.log(res.data.data);
  console.log(res.data.data.map(p => new Post(p)))
  // AppState.posts = res.data.data.map(p => new Post(p))


  }
}


export const blogService = new BlogService