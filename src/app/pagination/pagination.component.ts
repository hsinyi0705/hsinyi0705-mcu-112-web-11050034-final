import { JsonPipe, NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges {
  @Input({ required: true, transform: numberAttribute })
  totalCount = 0;

  @Input({ required: true, transform: numberAttribute })
  size!: number;

  @Input({ transform: numberAttribute })
  index = 1;

  @Output()
  indexChange = new EventEmitter<number>();

  range: number[] = [];

  ngOnChanges(): void {
    const max = Math.ceil(this.totalCount / this.size);
    this.range = Array.from({ length: max }, (_, i) => i + 1);
  }
}
