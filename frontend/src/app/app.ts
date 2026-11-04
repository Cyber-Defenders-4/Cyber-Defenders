import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assistant } from './shell/assistant/assistant';

@Component({
  imports: [RouterOutlet, Assistant],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
