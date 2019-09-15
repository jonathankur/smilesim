import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ExamplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-examples',
  templateUrl: 'examples.html',
})
export class ExamplesPage {

  orig : any = 'https://smilesim.com.au/server/blank.png';
  result : any = 'https://smilesim.com.au/server/blank.png';
  current : any = 0;
  pics : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient) {
     this.pics=[];
  }

  ionViewDidLoad() {
    this.pics=[];
    this.current = 0;
    let that=this;
       let url = 'https://mysmilesim.dental/server/examples.php?region='+window.localStorage.getItem('region')+'&end='+Math.random();
        this.http.get(url).subscribe(
         data => {
          	let s = JSON.stringify(data);
                let d = JSON.parse(s);
	     that.pics = d.pics;
            that.orig = that.pics[0].orig;
            that.result = that.pics[0].result;

         },
         err => {
         }
        ); 

  }

  goprev() {
   if (this.pics.length) {
    let c = this.current - 1;
    if (c<0) c=this.pics.length - 1;
    this.current=c;
    this.orig = this.pics[c].orig;
    this.result = this.pics[c].result;
   }
  }

  gonext() {
   if (this.pics.length) {
    let c = this.current + 1;
    if (c>=this.pics.length) c=0;
    this.current=c;
    this.orig = this.pics[c].orig;
    this.result = this.pics[c].result;
   }
  }
}
