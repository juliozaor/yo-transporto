import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  chats: Observable<any[]>;
  //idOferta: string;

  @Input() idOferta;
  @Input() nombre;



  constructor(db: AngularFirestore,
              private activatedRoute: ActivatedRoute,
              private modalCtrl: ModalController) {

   // this.idOferta = this.activatedRoute.snapshot.paramMap.get("idOferta");

    this.chats = db.collection(this.idOferta).valueChanges();
    // console.log(this.chats);

   }

   salir(){
    this.modalCtrl.dismiss();
   }

  ngOnInit() {


  }

}
