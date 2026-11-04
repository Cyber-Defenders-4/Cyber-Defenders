import {Component, input, output} from '@angular/core';

export type FloppyMood = 'think' | 'happy' | 'oops' | 'cheer';

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
