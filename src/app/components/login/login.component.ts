import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public grupoDeControles !: FormGroup;

  constructor(private fb : FormBuilder, private usuario : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'usuario': ['', [Validators.required, this.validadorDeEspacios]],
      'contrasena': ['', Validators.required],
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

  ingresar(){
    let usuario : any = this.grupoDeControles.get('usuario')?.value;
    let contrasena : any = this.grupoDeControles.get('contrasena')?.value;
    console.log(usuario);
    console.log(contrasena);
    if(usuario == 'empleado' && contrasena == 'empleado123'){
      this.usuario.isLoggedIn = true;
      this.usuario.currentUser = usuario;
      this.usuario.currentPass = contrasena;
      this.router.navigateByUrl('/repartidor/alta');
    }else if(usuario == 'admin' && contrasena == 'admin123'){
      this.usuario.isLoggedIn = true;
      this.usuario.currentUser = usuario;
      this.usuario.currentPass = contrasena;
      this.router.navigateByUrl('/repartidor/alta');
    }

    this.grupoDeControles.reset();
  }

  selectUsuarioValido(opcion : string){
    if(opcion == 'empleado'){
      this.grupoDeControles.get('usuario')?.setValue('empleado');
      this.grupoDeControles.get('contrasena')?.setValue('empleado123');
    }else{
      this.grupoDeControles.get('usuario')?.setValue('admin');
      this.grupoDeControles.get('contrasena')?.setValue('admin123');
    }

  }
}
