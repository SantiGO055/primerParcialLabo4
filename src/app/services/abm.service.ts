import { HttpClient } from '@angular/common/http';
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
  private paisActual?:string;

  constructor(public db: AngularFirestore,
    private http: HttpClient) {
    this.paisActual = 'Argentina';
    // this.peliculasColecction = db.collection(this.dbpath);
    // this.peliculas = this.peliculasColecction.snapshotChanges().pipe(map(actions=>{
    //   return actions.map(a=>{
    //     const data = a.payload.doc.data() as Pelicula; //colocar nombre de clase a obtener
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // }));


   }
  //  getAll(){
  //    return this.peliculas; /**retorna un observable, con subscribe obtengo los datos */
  //  }
   getCountryActual():string | undefined{
    
    return this.paisActual;
   }
   setCountryActual(pais:string){
    
    this.paisActual = pais;
   }
   getAllCountries(){
    return this.http.get("https://restcountries.eu/rest/v2/all");
   }

  //  add(pelicula: Pelicula){

  //   return this.peliculasColecction.add(JSON.parse( JSON.stringify(pelicula)));
  // }
  // deleteMensaje(pelicula: Pelicula){
  //   this.peliculaDoc = this.db.doc(`mensajes/${pelicula.id}`);
  //   this.peliculaDoc.delete();
  // }
  // updateMensaje(pelicula: Pelicula){
  //   this.peliculaDoc = this.db.doc(`mensajes/${pelicula.id}`);
  //   this.peliculaDoc.update(pelicula);
  // }
  // altaActor(actor : Actor){
  //   return this.actoresColecction.add(JSON.parse( JSON.stringify(actor)));
  // }
  // getAllActores(){
    
  //   return this.actores;
  // }
}
