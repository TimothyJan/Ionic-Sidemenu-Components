import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SidemenuComponent } from "../../components/sidemenu/sidemenu.component";


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  standalone: true,
  imports: [SidemenuComponent, IonContent]
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {}

}
