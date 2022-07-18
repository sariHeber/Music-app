import { Gener } from "./Gener.enum";

export default class Song {
    id?:String;
    title: String|undefined;
    artist: String|undefined;
    genre:Gener|undefined;
    length:Number|undefined;
    price:Number|undefined;
  
    constructor(id?: String, title?: String,artist?:String,genre?:Gener,length?:Number,price?:Number) {
        this.id=id;
        this.title=title;
        this.artist=artist;
        this.genre=genre;
        this.length=length;
        this.price=price;
    }
    
} 
