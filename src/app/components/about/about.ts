import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0,
          height: '0px', // Починаємо з нульової висоти
          overflow: 'hidden',
          transform: 'translateY(20px)',
        }),
        animate(
          '500ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 1,
            height: '*', // Розтягуємо до реальної висоти контенту
            transform: 'translateY(0)',
          }),
        ),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate(
          '400ms ease-in',
          style({
            opacity: 0,
            height: '0px',
            transform: 'translateY(20px)',
          }),
        ),
      ]),
    ]),
  ],
})
export class About {
  isExpanded = false;

  toggleMore() {
    this.isExpanded = !this.isExpanded;
  }
}
