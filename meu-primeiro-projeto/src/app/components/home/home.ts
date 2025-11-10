import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "Leo";
  idButton = "eed";
  // meubooleano = false;

  // atualizabooleano(valor : boolean){
  //   this.meubooleano = valor;
  // }

  submit(){
    console.log("video");
  }
}
