import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HTTP } from '@ionic-native/http';

import { NopinPage } from '../nopin/nopin';

@Component({
  selector: 'page-dosim',
  templateUrl: 'dosim.html',
})
export class DosimPage {
  public odd : any = 1;
  public title : any = 'PIN Code';
  public blurb : any = 'A';
  public before : any = './assets/img/before0.jpg';
  public after : any = './assets/img/after0.jpg';
  public src : any = './assets/img/before0.jpg';
  public answers : any = [0,0,0,0];
  public timer : any;
  public baf : any = 'BEFORE';
  public comments : any = '';
  public mode : any = 8;
  public pl : any;
  public instructions : any = '...';
  public pinstructions : any = '';
  public welcome : any = '';
  public pin : any = '';
  public data = [
    {'title' : 'WHITENING', 'blurb' : 'Would you like to improve the <b class="blkh">COLOUR</b> of your teeth?'},
    {'title' : 'VENEERS', 'blurb' : 'Would you like to improve the <b class="blkh">SHAPE</b> of your teeth?'},
    {'title' : 'ORTHODONTICS', 'blurb' : 'Would you like to address any <b class="blkh">CROOKED</b> teeth?'},
    {'title' : 'COSMETICS', 'blurb' : 'Would you like to address any <b class="blkh">GAPS</b> in your teeth?'}
  ];

  public current : any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient, private camera: Camera, public loadingCtrl: LoadingController, public alertCtrl : AlertController, public nhttp : HTTP) {
    this.pl = {
      uniq : 0,
      ans : '',
      picdata : '',
      comments : '',
      dcode : '',
      suburb : '',
      state : '',
      country : '',
      region: '0',
      name : '',
      email : '',
      pushid : '',
      phone : '',
      dcodestat : 0
    };
    this.comments='';
    this.pin='';
    this.mode=8;
    this.welcome = '';
  }

 checkpin()
 {   let that=this;
      let url = 'https://mysmilesim.dental/server/checkpin.php?pin='+encodeURIComponent(this.pin);
        this.http.get(url).subscribe(
         data => {
       	       let s = JSON.stringify(data);
                let d = JSON.parse(s);

               if (d.success) {
                that.welcome = d.welcome;
                that.title='WELCOME';
                that.mode=4;
                
                that.pl.name=d.name;
                that.pl.email =d.email;
                that.pl.dcode = d.dcode;
                that.pl.phone = d.phone;    
                window.localStorage.setItem('region',d.region); 
                window.localStorage.setItem('home',d.home);
                if (d.name == 'clearme') {
                  window.localStorage.removeItem('pushid');
                  window.localStorage.removeItem('uniq');
                }
   
               }  
               else {
                 that.pin='';
                 that.showError(); 
               }
         },
         err => {
         }
        ); 

 }

 
  ionViewDidEnter() {
     this.current=0;
     this.odd=1;
     this.mode=8;
     let that=this;
     this.title='PIN Code';


     that.timer = setInterval(function () {
       that.odd = 1 - that.odd;
       that.src = (that.odd ? that.before : that.after);
       that.baf = (that.odd ? 'BEFORE' : 'AFTER');
     }, 2500);
     this.pl.uniq = window.localStorage.getItem('myac');
       let url = 'https://mysmilesim.dental/server/instructions.php?rnd='+Math.random();
        this.http.get(url).subscribe(
         data => {
       	       let s = JSON.stringify(data);
                let d = JSON.parse(s);
             that.instructions = d.instructions;
             that.pinstructions = d.pinstructions;
         },
         err => {
         }
        ); 

  }

  startq()
  { this.mode=0;
    this.shownum();
  }

  gonxt(a)
  { this.answers[this.current]=a;
    if (this.current++>=3) {
       this.takeselfie();
    }
    else 
     this.shownum();
  }

  goback()
  { this.current--;
    this.shownum();
  }

  shownum()
  { this.title = this.data[this.current].title;
    this.blurb = this.data[this.current].blurb;
    this.before = './assets/img/before'+this.current.toString()+'.jpg';
    this.after = './assets/img/after'+this.current.toString()+'.jpg';
    this.src = (this.odd ? this.before : this.after);
   
  }
 
  takeselfie()
  {  this.title='SELFIE TIME!';
     this.mode=1;
 
  }

  pdecode(pwd)
  {
    let l = parseInt(pwd.substr(0,3));
    pwd=pwd.substr(3);

    let d=pwd.length / 12;
    
    let juggleback = [9,4,10,1,8,6,3,2,7,5,0,11];
    let p = '';

    for (let i =0; i< d; i++) {
      let pp=pwd.substr(i*12,12);
      for (let e=0; e<12; e++) 
       p=p + pp.substr(juggleback[e],1);
    }
    return p.substr(0,l);
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
        this.saveme();
      }, (err) => {
         alert(JSON.stringify(err));
      });
 
  }



  nocode()
  { this.pl.dcodestat = 1;
  }

  yescode()
  { this.pl.dcodestat = 0;
  }

  nopin()
  { this.navCtrl.push( NopinPage );
  }


  showError() {
    let that=this;
    let alert = this.alertCtrl.create({
      title: 'Incorrect PIN Code',
      subTitle: 'Please ask your dentist for a code',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'btt',
	  role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  doComplete() {
    let that=this;
    let alert = this.alertCtrl.create({
      title: 'Thank you - All Done',
      subTitle: 'Track your photos in the See My Simulations tab below',
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
      this.pl.me = window.localStorage.getItem('uniq');
      this.pl.ans = '' + this.answers[0].toString() + this.answers[1].toString() + this.answers[2].toString() + this.answers[3].toString();
      let pi = window.localStorage.getItem('pushid');
      if (!pi) pi='';
      this.pl.pushid = pi;
      this.pl.region = window.localStorage.getItem('region');
      let that = this;
       let loading = this.loadingCtrl.create({
         content: 'Please wait...'
       });
       loading.present();
       let home = window.localStorage.getItem('home');
       if (!home) home='https://mysmilesim.dental';
       let url = home+'/server/upload.php';

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

