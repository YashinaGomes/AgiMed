import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']  // <-- CORRETO
})
export class ComponentsComponent { }
