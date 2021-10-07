import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {

  public grupoDeControles !: FormGroup;

  constructor(private fb : FormBuilder, private usuario : LoginService, private router : Router, private firestore : FirestoreService) { }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'dni': ['', Validators.required, Validators.min(111111), Validators.max(9999999)],
      'nombre': ['', [Validators.required, this.validadorDeEspacios]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(150)]],
      'capacidadTransporte': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      'pais': ['', Validators.required],
      'unidadPropia': ['', Validators.required]
    });
  }

  private validadorDeEspacios(control : AbstractControl) : null | object {

    let nombre : string = control.value;

    let espacios = nombre.includes(' ');

    if(espacios){
      return {validadorDeEspacios : true};
    }else{
      return null;
    }
  }

  eventoPais(opcion : any){
    this.grupoDeControles.get('pais')?.setValue(opcion);
  }

  agregarRepartidor(){
    this.firestore.subirRepartidor(this.grupoDeControles.value);
    this.grupoDeControles.reset();
  }
}
