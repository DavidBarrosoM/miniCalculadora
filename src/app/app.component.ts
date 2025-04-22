import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }
  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }
  dividir():void{
    if(this.numero2 !== 0){
      this.resultado = this.numero1 / this.numero2;
    } else {
      alert("No se puede dividir entre cero.");
    }
    this.numero1 = 0; 
  }
}
