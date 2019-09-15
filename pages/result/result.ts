import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  title : any = '';
  pic : any = './assets/img/blank.jpg';
  pic2 : any = './assets/img/blank.jpg';
  text : any = '';
  text2 : any = '';
  name : any = '';
  date : any = '';
  result : any = 0;
  url : any = '';
  ebook : any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient, private iab : InAppBrowser) {
  }

  ionViewDidLoad() {
    let that=this;
        let home = window.localStorage.getItem('home');
        if (!home) home='https://mysmilesim.dental';

       let url = home + '/server/getresult.php?region='+window.localStorage.getItem('region')+'&id='+this.navParams.get('id');
        this.http.get(url).subscribe(
         data => {
      	let s = JSON.stringify(data);
                let d = JSON.parse(s);
       that.title = d.title;
            that.pic = d.pic;
            that.name = d.name;
            that.date = d.date;
            that.pic2 = d.pic2;
            that.result = d.result;
            that.text = d.text;
            that.text2 = d.text2;
            that.ebook = d.ebook;
            that.url = d.url;
         },
         err => {
         }
        ); 

  }

  doebook() {
      const browser = this.iab.create(this.url,'_blank','location=yes');
  }


}
