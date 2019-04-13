import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioLivroPage } from './inicio-livro';

@NgModule({
  declarations: [
    InicioLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioLivroPage),
  ],
})
export class InicioLivroPageModule {}
