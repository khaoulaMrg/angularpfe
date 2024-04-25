import { Component, Input, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { title } from 'process';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

@Input() indicatorsVisible= true;
@Input() animationSpeed= 500;
@Input() autoPlay=true;
@Input() authoPlaySpeed=3000;
@Input() slides: any[]= [
  {

   url: '/assets/img/demandeB.gif',
   title:'first slide',
   
},
{

  url: '/assets/img/offre2.jpg',
  title:'first slide',
  
}

];
 
currentSlide=0;
faArrowRight = faArrowRight;
faArrowLeft = faArrowLeft;
hidden: boolean;



  next(){
    let currentSlide= (this.currentSlide+1 )% this.slides.length;
   this.jumpToSlide(currentSlide);
  }

  previous(){
    let currentSlide=(this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
   
  }


  jumpToSlide(index: number){
    this.hidden=true;
    setTimeout(() =>{
      this.currentSlide=index;
            this.hidden=false;
      }, this.animationSpeed);
    

  }

  search() {
    console.log('Recherche en cours...');
  }

  constructor(){
    if(this.autoPlay){
      setInterval(() =>{
        this.next();
      }, this.authoPlaySpeed);
    }
  }
}
