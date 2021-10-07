import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  retorno : any;

  constructor(private api : ApiService) { 
    this.api.getGithub().subscribe((retorno : any) =>{
      this.retorno = retorno;
      console.log(retorno);
    });
  }

  ngOnInit(): void {
  }

}
