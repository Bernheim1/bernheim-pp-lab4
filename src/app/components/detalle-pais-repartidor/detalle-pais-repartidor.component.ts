import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-pais-repartidor',
  templateUrl: './detalle-pais-repartidor.component.html',
  styleUrls: ['./detalle-pais-repartidor.component.scss']
})
export class DetallePaisRepartidorComponent implements OnInit {

  flags : any;
  paises : any[] = [];
  @Input() repartidorDetalle : any = '';

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
}
