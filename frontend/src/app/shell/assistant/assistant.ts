import {Component, input, output} from '@angular/core';
import { FloppyMood } from '../../core/services/assistant.service';

@Component({
  imports: [],
  selector: 'cd-assistant',
  styleUrl: './assistant.css',
  templateUrl: './assistant.html',
})
export class Assistant {
  mood = input<FloppyMood>('happy');
  message = input<string>('');
  options = input<string[]>([]);
  picked = output<string>();
}
