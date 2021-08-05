export class HellowWorld{
  
  name:string
  constructor(name:string){
    this.name = name;
  }

  greet():string {
    return `Hellow World, Webpack with ${this.name}`;
  }
}