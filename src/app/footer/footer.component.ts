import { Component } from '@angular/core';
import { RoundedBorderDirective } from '../Directives/rounded-border.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RoundedBorderDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
