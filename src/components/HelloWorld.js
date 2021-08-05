export class HellowWorld{
  constructor(name){
    this.name = name;
  }

  greet(){
    return `Hellow World, Webpack with ${this.name}`;
  }
}