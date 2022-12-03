import { HomePage } from "../models/HomePage.js";
import { api } from "./AxiosService.js"



class PageContentService {


  async getHomePageContent() {
    const res = await api.get('api/home-pages', {
      params:
        { 'populate': "*" },
    })
    console.log(new HomePage(res.data.data));
  }
}

export const pageContentService = new PageContentService()