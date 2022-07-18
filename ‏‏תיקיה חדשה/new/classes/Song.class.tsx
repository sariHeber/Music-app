import { Gener } from "./Gener.enum";

export default class Song {
    id:String;
    title: String;
    artistName: String;
    gener:Gener;
    length:Number;
    price:Number;
  
    constructor(id: String, title: String,artistName:String,gener:Gener,length:Number,price:Number) {
        this.id=id;
        this.title=title;
        this.artistName=artistName;
        this.gener=gener;
        this.length=length;
        this.price=price;
    }
    
} 
