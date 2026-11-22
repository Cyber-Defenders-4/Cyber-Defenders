import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assistant } from './shell/assistant/assistant';
import { AssistantService } from './core/services/assistant.service';
import { WindowComponent } from './shared/ui/window/window';
import { ButtonComponent } from './shared/ui/button/button';
import { PanelComponent } from './shared/ui/panel/panel';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WindowComponent, ButtonComponent, PanelComponent, Assistant],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly assistant = inject(AssistantService);

  protected readonly title = signal('frontend');
}
