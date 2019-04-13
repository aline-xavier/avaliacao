import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import firebase from 'firebase';
import { constructor } from 'localforage';

@IonicPage()
@Component({
  selector: 'page-inicio-livro',
  templateUrl: 'inicio-livro.html',
})
export class InicioLivroPage {

  listaDeLivros: Livro[] = [];//<--
  firestore = firebase.firestore();// Inicio um instancia do banco
  settings = { timestampsInSnapshots: true };//<--

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController) {

    this.firestore.settings(this.settings); //<--

  }

  ionViewDidLoad() {
    this.menu.enable(true);
    this.getList();
  }

  getList() {

    var ref = firebase.firestore().collection("livro");
    ref.get().then(query => {
      query.forEach(doc => {
        let e = new Livro();
        e.setDados(doc.data());
        e.id = doc.id;
        this.listaDeLivros.push(e);
      });
    });

  }

  novoLivro() {
    this.navCtrl.push('NovoLivroPage');
  }

  remove(obj: Livro) {
    var ref = firebase.firestore().collection("livro");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeLivros = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }

  atualiza(obj: Livro) {
    this.navCtrl.push('LivroVisualizaPage', { 'livro': obj })
  }

}




