import { Github } from './../../clases/github';
import { AbmService } from './../../services/abm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private abmSvc: AbmService) { }
  github!: any;
  ngOnInit(): void {
    this.getMyGithub();
  }

  getMyGithub(){
    this.abmSvc.getGithub().subscribe(myGit=>{
      this.github = JSON.parse(JSON.stringify(myGit));
    });
  }

}
