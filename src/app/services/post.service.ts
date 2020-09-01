import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public fireservice: AngularFirestore) { }

  createNewPost(data) {
    return this.fireservice.collection('info').add(data);
  }
}
