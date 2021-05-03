import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AbmService {

  private dbpath = '/peliculas';
  peliculasColecction: AngularFirestoreCollection<any> | undefined;
  peliculaDoc: AngularFirestoreDocument<any> | undefined; // colocar en any el nombre de la clase creada
  // public peliculas: Observable<any[]>; //colocar en any el nombre de la clase para obtener de ña base una lista de todos los elementos de esa clase
  
  constructor(public db: AngularFirestore) {
    // this.peliculasColecction = db.collection(this.dbpath);
    // this.peliculas = this.peliculasColecction.snapshotChanges().pipe(map(actions=>{
    //   return actions.map(a=>{
    //     const data = a.payload.doc.data() as Pelicula; //colocar nombre de clase a obtener
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // }));


   }
}
