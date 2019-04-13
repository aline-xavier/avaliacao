import firebase from "firebase";
import { Livro } from "../model/livro";
import { Injectable } from "@angular/core";

@Injectable()
export class LivroService{

    firestore = firebase.firestore();//<--
    settings = {timestampsInSnapshots: true};//<--
    listaDeLivros : Livro[] = [];

    constructor(){
        this.firestore.settings(this.settings); //<--
    }

    getList() : Livro[]{

     

        var ref = this.firestore.collection("livro");
        
        ref.get().then(query => {
            query.forEach(doc => {
                let e = new Livro();
                e.setDados(doc.data());
                this.listaDeLivros.push(e);
            });
        });

        return this.listaDeLivros;
      }
}