export class Recipe {
  constructor(public title: string,
              public author: string,
              public instructions: string[],
              public category: string,
              public images: string[],
              public dateCreated: Date,
    ) {
    
    }
}
