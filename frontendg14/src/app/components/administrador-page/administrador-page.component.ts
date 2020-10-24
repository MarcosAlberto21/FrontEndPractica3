import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-administrador-page',
  templateUrl: './administrador-page.component.html',
  styleUrls: ['./administrador-page.component.css']
})
export class AdministradorPageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    alert("Aplicación en construcción, gracias por tu paciencia");
  }

}
