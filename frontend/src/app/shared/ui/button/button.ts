import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  readonly isDefault = input<boolean>(false);
  readonly isDisabled = input<boolean>(false);

  readonly clicked = output<MouseEvent>();

  onClick(event: MouseEvent) {
    if (!this.isDisabled()) {
      this.clicked.emit(event);
    }
  }
}