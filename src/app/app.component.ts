import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  { // implemntieren OnIniti von der Libary Angular

images = [`business.jpg`,`laptop.jpg`,`scool.jpg`];
currentImage=0;
showImage = true;

ngOnInit(){
this.updateImage();
}
//NgOnInit wird immer am anfang ausgeführt 


updateImage() {
  
setInterval(()=>{
this.currentImage++;
this.currentImage =this.currentImage % this.images.length; // % modulu
this.showImage =false;

setTimeout(()=>{
  this.showImage =true;
},10)

},8000)

}



}
