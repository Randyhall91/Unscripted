


export class Post{
  constructor(data){
    this.id = data.attributes.Post[0].id
    this.title = data.attributes.Post[0].Title
    this.content = data.attributes.Post[0].Content
    this.headerImg = data.attributes.Post[0].Header.data.attributes.formats.medium.url
    // this.additionalImgs = data[0].attributes.Post[0].AdditionalImgs.data.attributes.formats.medium
    
  }
}