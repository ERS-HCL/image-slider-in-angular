import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  title = 'CodeInfo';

  constructor(private _http: HttpClient) {
  }


  imagesData: ImagesJsonFormate[];
  ngOnInit(): void {

    this.getImages();
 
  }


  getImages() {
    this._http.get('assets/img.json').subscribe((res: any) => {
 
     this.imagesData = res;

    }, error => {

      console.log(error);

    });

  }


export interface ImagesJsonFormate {

  imageNumber: number;

  image: string;

  captionText: string;

}

