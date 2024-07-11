import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-description-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-description-card.component.html',
  styleUrl: './ui-description-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDescriptionCardComponent {}
