import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-result-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-result-card.component.html',
  styleUrl: './ui-result-card.component.scss',
})
export class UiResultCardComponent {
  public monthlyRepayments = input<number>();
  public totalRepay = input<number>();
}
