import { Component, OnInit } from '@angular/core';
import { LoginServicesService} from 'src/app/services/login-services.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public loginService: LoginServicesService) { }

  public nombre:String;
  ngOnInit(): void {

    this.nombre=this.loginService.getIdUser().username;

  }

}
