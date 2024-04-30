import { Component, OnInit } from '@angular/core';
// import { IbgeService } from './ibge.service';
import { IbgeService } from '../services/ibge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  estados: any[]=[];

  constructor(private ibgeService: IbgeService) {}

  ngOnInit() {
    this.ibgeService.getEstados().subscribe(estados => {
      this.estados = estados;
    });
  }
}
