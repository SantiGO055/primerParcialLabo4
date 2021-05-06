import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  correo:string = '';
  clave:string  = '';
  perfil:string  = '';
  //pass admin: admin123
  //pass empleado: empelado123
  user:User;
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {
    this.user = new User();
   }

  ngOnInit(): void {

  }

  async login(){
    this.user.email = this.correo;
    
    const user = await this.authSvc.SignIn(this.user, this.clave);
    if (user.message == null ) {
      // console.log("se logueo");
      localStorage.setItem('emailLogueadoLocalStorage', this.user.email);
      // localStorage.setItem('usuarioLogueado', JSON.stringify(this.user));
      this.router.navigateByUrl('/bienvenido');
    }

  }
  cargarEmpleado(){
    this.correo = "empleado@empleado.com";
    this.clave = "empleado";
    this.perfil = "empleado";
    

  }
  cargarAdmin(){
    this.correo = "admin@admin.com";
    this.clave = "admin123";
    this.perfil = "empleado";


  }

}
