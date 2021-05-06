import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
