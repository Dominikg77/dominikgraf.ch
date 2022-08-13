import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = [`business.jpg`,`laptop.jpg`,`scool.jpg`];
  headlines=[
  `Bring engeneering ot the next level`,
  `Born to code`,
  `Graduated at TUM`
  ];
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
