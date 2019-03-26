// export class Recipe {
//   // public made: boolean = false;
//   // constructor(public title: string, public ingredients: string[], public instructions: string) {}
//   // markMade(){
//   //   this.made = true;
//   // }
//   // markNotMade(){
//   //   this.made = false;
//   // }
// }

















export class Recipe {
  made: string = 'Haven\'t made this yet!';
  constructor(public title: string, public ingredients: string[], public instructions: string, public difficulty: number) {}
  markMade(){
    this.made = 'Made this!';
  }
  markNotMade(){
    this.made = 'Haven\'t made this yet!';
  }
}
