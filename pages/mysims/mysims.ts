import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ResultPage } from '../result/result';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-mysims',
  templateUrl: 'mysims.html',
})
export class MysimsPage {

  cards : any = [];
  me : any = '';
  instr : any = '';
  pl : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient, private camera: Camera, public loadingCtrl: LoadingController, public alertCtrl : AlertController, public nhttp : HTTP) {
     this.cards=[];
    this.pl = {
      picdata : '',
      region: '0', 
      id : 0
    };

  }

  ionViewDidLoad() {
    this.cards=[];
    this.instr='';
    this.me=window.localStorage.getItem('uniq');
    let that=this;
        let home = window.localStorage.getItem('home');
        if (!home) home='https://mysmilesim.dental';

       let url = home+'/server/mysims.php?region='+window.localStorage.getItem('region')+'&me='+window.localStorage.getItem('uniq')+'&end='+Math.random();
        this.http.get(url).subscribe(
         data => {
      	let s = JSON.stringify(data);
                let d = JSON.parse(s);
       that.cards = d.cards;
            that.instr = d.instr;
         },
         err => {
         }
        ); 

  }

 goPic(i,sts)
 { if (sts!=1) this.navCtrl.push( ResultPage, { id : i});
 }


  retake(i)
  {  this.pl.id=i; 
     const options: CameraOptions = {
        quality: 100,
        targetWidth:500,
        targetHeight:650, 
        correctOrientation:true,
        destinationType: this.camera.DestinationType.DATA_URL,
        cameraDirection: this.camera.Direction.FRONT,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
        this.pl.picdata = imageData;
        this.pl.region = window.localStorage.getItem('region');
        this.saveme();
      }, (err) => {
         alert(JSON.stringify(err));
      });
 
  }

  doComplete() {
    let that=this;
    let alert = this.alertCtrl.create({
      title: 'Thank you - All Done',
      subTitle: 'Your dentist will be in touch shortly',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'btt',
	  role: 'cancel',
          handler: () => {
             this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  saveme()
  {
      let that = this;
       let loading = this.loadingCtrl.create({
         content: 'Please wait...'
       });
       loading.present();
        let home = window.localStorage.getItem('home');
        if (!home) home='https://mysmilesim.dental';

       let url = home+'/server/retake.php';

         this.nhttp.post(url, that.pl, {})
         .then(data => {
            loading.dismiss();
 	    that.doComplete();
         })
         .catch(error => {
            alert(JSON.stringify(error));
            loading.dismiss();
     
         });
     

  }

}
