import { Injectable, signal } from '@angular/core';

export type FloppyMood = 'think' | 'happy' | 'oops' | 'cheer';

@Injectable({ providedIn: 'root' })
export class AssistantService {
  readonly visible = signal(true);
  readonly mood = signal<FloppyMood>('happy');
  readonly message = signal('');
  readonly options = signal<string[]>([]);

  say(message: string, mood: FloppyMood = 'happy', options: string[] = []) {
    this.message.set(message);
    this.mood.set(mood);
    this.options.set(options);
  }

  clear() { this.say(''); }

  hide() { this.visible.set(false); }

  show() { this.visible.set(true); }
}
