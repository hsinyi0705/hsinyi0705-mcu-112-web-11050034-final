import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.css',
})
export class FavoriteButtonComponent {
  @Input({ transform: numberAttribute })
  count!: number;
}
