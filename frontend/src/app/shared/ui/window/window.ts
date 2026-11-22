import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window.html',
  styleUrl: './window.css'
})
export class WindowComponent {
  // Texte und Inhalte
  readonly title = input<string>('Neues Fenster');
  readonly icon = input<string | undefined>(undefined);
  
  // Zustände
  readonly isActive = input<boolean>(true);
  readonly isStatic = input<boolean>(false);
  
  // Layout und Position
  readonly width = input<string>('auto');
  readonly height = input<string>('auto');
  readonly left = input<string | undefined>(undefined);
  readonly top = input<string | undefined>(undefined);
}