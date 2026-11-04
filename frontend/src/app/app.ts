import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assistant } from './shell/assistant/assistant';
import { AssistantService } from './shell/assistant/assistant.service';

@Component({
  imports: [RouterOutlet, Assistant],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly assistant = signal(AssistantService);
}
