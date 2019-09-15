import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the NopinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nopin',
  templateUrl: 'nopin.html',
})
export class NopinPage {

 public pl : any;
  public mode : any = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams, public nhttp : HTTP, public loadingCtrl: LoadingController, public alertCtrl : AlertController, private http : HttpClient, private camera: Camera) {

   this.pl = { 
      id : '0', 
      suburb : '',
      state : '',
      country : '',
      name : '',
      email : '',
      comments : '',
      phone : '',
    };
  }

  ionViewDidLoad() {
  }

  doComplete() {
    let that=this;
    let alert = this.alertCtrl.create({
      title: 'Thank you - All Done',
      subTitle: 'We will locate a suitable dentist for you',
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


   takepicture()
  {   const options: CameraOptions = {
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
        this.saveme2();
      }, (err) => {
         alert(JSON.stringify(err));
      });
 
  }

  saveme2()
  {
      this.pl.me = window.localStorage.getItem('uniq');
      let that = this;
       let loading = this.loadingCtrl.create({
         content: 'Please wait...'
       });
       loading.present();
       let url = 'https://mysmilesim.dental/server/newpat_upload.php';

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


  saveme()
  {   this.pl.id='0';
      let that = this;
       let loading = this.loadingCtrl.create({
         content: 'Please wait...'
       });
       loading.present();
       let url = 'https://mysmilesim.dental/server/nopin.php';

         this.nhttp.post(url, that.pl, {})
         .then(data => {
            loading.dismiss();

      	let s = JSON.stringify(data);

                let d = JSON.parse(s);

      	let s2 = JSON.stringify(d.data);
        let a1 = s2.indexOf(':')+1;
        let a2 = s2.indexOf('}');
        let d2 = s2.substring(a1,a2);
            that.pl.id= d2;
 	    that.mode=1;
         })
         .catch(error => {
            alert(JSON.stringify(error));
            loading.dismiss();
     
         });
     

  }
}
