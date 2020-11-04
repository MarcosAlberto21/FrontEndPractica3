import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { regalo } from 'src/app/models/regalo';
import { userGift } from 'src/app/models/userGift';
import { LoginServicesService } from 'src/app/services/login-services.service';
import { RegaloServicesService } from '../../services/regalo-services.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-boton-regalar',
  templateUrl: './boton-regalar.component.html',
  styleUrls: ['./boton-regalar.component.css']
})
export class BotonRegalarComponent implements OnInit {

  @Input() codigoGitfcard: string = ""

  public idUsuarioLogueado = this.loginService.getIdUser().id_usuario;

  public nombre: string = ""
  public index: number = 0;
  public regalo: regalo ={
    tarjeta: '',
    para: 0
  }
  public otherUser: userGift[] = [];

  constructor(private modalService: NgbModal, private regaloServicio: RegaloServicesService, 
    private loginService: LoginServicesService, public toastService: ToastService) { }

  ngOnInit(): void {
    this.ObtenerOtrosUsuario();
  }

  open(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'})
  }

  ObtenerOtrosUsuario(): void{
    this.regaloServicio.getOtherUsers(this.idUsuarioLogueado).subscribe((res: userGift[])=>{
      this.otherUser = res;
      //console.log(this.otherUser);

    },error=>{
      this.toastService.showError('Hubo un error con la carga de usuarios, intentelo mas tarde!!');
    });
  }

  guardarUsuarioRegalo(user:string, pos: number){
    this.nombre = user;
    this.index = pos;
    this.toastService.showInfo(`El regalo sera dirigido a ${user}`);
  }

  regalarGift() {
    this.regalo.tarjeta = this.codigoGitfcard;
    this.regalo.para = this.otherUser[this.index].id_usuario;
    this.regaloServicio.regalarGiftcard(this.regalo).subscribe((res)=>{

      this.toastService.showSuccess('Proceso finalizado',`Su regalo al usario ${this.nombre} se completo exitosamente`);
    },error=>{
      this.toastService.showError('Hubo un error con su regalo, intentelo mas tarde!!');
    });
  }


}
