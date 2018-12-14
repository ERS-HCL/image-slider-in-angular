import { Component,OnInit} from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  constructor() { 
                            
  }
  ngOnInit(){
  }

  imagesData:ImagesJsonFormate[]=[
    {
      imageNumber:1,
      image:"https://tse2.mm.bing.net/th?id=OIP.3HqD3gjGShfdWJ-XowfgagHaE8&pid=Api&w=1200&h=800&rs=1&p=0",
      captionText:"Nature Image" 
    },
    {
      imageNumber:2,
      image:"https://tse4.mm.bing.net/th?id=OIP.U-VU51_0yAcu_Fh7x3j2uQHaE8&pid=Api",
      captionText:"Construction Image" 
    },
    {
      imageNumber:3,
      image:"https://tse4.mm.bing.net/th?id=OIP.WOo0xJOMl5ZeT1j1qw9IFAHaEo&pid=Api",
      captionText:"Rainbow Image" 
    }
  ]


}

export interface ImagesJsonFormate{
  imageNumber:number;
  image:string;
  captionText:string;
}
