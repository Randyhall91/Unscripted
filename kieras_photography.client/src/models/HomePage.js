import { Imgs } from "./Imgs.js"



export class HomePage {
  constructor(data) {
    this.carousel = data.carousel.data.map(img => new Imgs(img))
    this.quote = data.quote
    this.aboutHeader = data.aboutHeader
    this.aboutContent = data.aboutContent
    this.aboutLifeStyleHeader = data.aboutLifeStyleHeader
    this.aboutLifeStyleContent = data.aboutLifeStyleContent
    this.letsChatHeader = data.letsChatHeader
    this.letsChatContent = data.letsChatContent
  }
}