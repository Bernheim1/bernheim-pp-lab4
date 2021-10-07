import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  flags : any;
  paises : any[] = [];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private api : ApiService) { 
    this.api.getFlags().subscribe((flags : any) =>{
      this.flags = flags;
      console.log(this.flags);
      for(let i = 0; i < flags.length; i++) {
        this.paises[i] = flags[i];
      }
    });
  }

  ngOnInit(): void {
  }

  setOutput(opcion : any){
    this.paisSeleccionado.emit(opcion);
  }
}
