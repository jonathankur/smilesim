import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ExamplesPage } from '../examples/examples';
import { DosimPage } from '../dosim/dosim';
import { HttpClient } from '@angular/common/http';
import { MysimsPage } from '../mysims/mysims';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content : any = 'Loading ...';
  content2 : any = '';
  banner : any = './assets/img/sponsorbanner4.jpg';
  num : any = 0;
  unseen : any = 0;
  pushid : any = '';
  thisversion : any = 2;

  constructor(public navCtrl: NavController, private http : HttpClient, private alertCtrl : AlertController, private oneSignal: OneSignal) {

  }

  ionViewDidEnter()
  { let uniq = window.localStorage.getItem('uniq');
    if (!uniq) {
     let d  = new Date();
     let n1 = Math.floor(Math.random()*26)+65;
     let n2 = Math.floor(Math.random()*26)+65;
     uniq=String.fromCharCode(n1)+ d.getTime().toString() + String.fromCharCode(n2);
     window.localStorage.setItem('uniq',uniq);
    }

    let region = window.localStorage.getItem('region');
    if (!region) window.localStorage.setItem('region','0');
    

    this.pushid=window.localStorage.getItem('pushid');
    if (!this.pushid) this.pushid='';


   let that=this;
        let home = window.localStorage.getItem('home');
        if (!home) home='https://mysmilesim.dental';

       let url = home+'/server/home.php?region='+window.localStorage.getItem('region')+'&me='+uniq;
        this.http.get(url).subscribe(
         data => {
 	let s = JSON.stringify(data);
                let d = JSON.parse(s);
           that.content = d.content + '<br>['+home+']';
           that.content2 = d.content2;
  //         that.banner = d.banner;
           that.num = d.num; 
           that.unseen = d.unseen;
           let v = parseInt(d.version);
            if (v > that.thisversion)
               that.versionmessage(v);
           if ((d.num) && (!that.pushid.length)) {
            that.getpushinfo();
          }
            
         },
         err => {
         }
        ); 
  }


  getpushinfo()
  {
     this.oneSignal.startInit('1697d479-713f-422f-b2cb-a48b4e02678b', '981456573821'); 
 
     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
     this.oneSignal.endInit();
     let i = this.oneSignal.getIds();
     i.then( data => {
 
        let that=this;
        let w = window.localStorage.getItem('uniq');
        let home = window.localStorage.getItem('home');
        if (!home) home='https://mysmilesim.dental';
        let url = home+'/server/pushtoken.php?region='+window.localStorage.getItem('region')+'&me='+w+'&pushid='+data.userId;
        window.localStorage.setItem('pushid',data.userId);
        this.http.get(url).subscribe(
         data => {
         },
         err => {
         }
        ); 
        
     });
  }     

 versionmessage(a) {
      this.thisversion = a;
      let that=this;
      let alert = this.alertCtrl.create({
      title: 'New Version Available',
      subTitle: 'Please go to the App Store or Google Play Store to get the latest version of this App',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
          }
        }
        
      ]
    });
    alert.present();
 }

  examples() {
    this.navCtrl.push(ExamplesPage);
  }


  previous() {
    this.navCtrl.push(MysimsPage);
  }


  startup() {
    this.navCtrl.push(DosimPage);
  }

}
