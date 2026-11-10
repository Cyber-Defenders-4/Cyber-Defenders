import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assistant } from './shell/assistant/assistant';
import { AssistantService } from './core/services/assistant.service';

@Component({
  imports: [RouterOutlet, Assistant],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly assistant = inject(AssistantService);
}
