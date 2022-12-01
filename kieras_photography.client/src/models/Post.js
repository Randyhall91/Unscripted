


export class Post{
  constructor(data){
    this.id = data.attributes.Post.id
    this.title = data.attributes.Post.Title
    this.content = data.attributes.Post.Content
    this.headerImg = data.attributes.Post.Header.data.attributes.formats.medium.url
    // this.additionalImgs = data[0].attributes.Post[0].AdditionalImgs.data.attributes.formats.medium
    
  }
}