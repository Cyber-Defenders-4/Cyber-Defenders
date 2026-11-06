import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Assistant } from './assistant';

describe('Assistant', () => {
  let component: Assistant;
  let fixture: ComponentFixture<Assistant>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assistant],
    }).compileComponents();

    fixture = TestBed.createComponent(Assistant);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows none bubble without message', () => {
    expect(el.querySelector('.cd-bubble')).toBeNull();
  });

  it('shows bubble with message', async () => {
    fixture.componentRef.setInput('message', 'Hmm..');
    await fixture.whenStable();

    const bubble = el.querySelector('.cd-bubble');
    expect(bubble).not.toBeNull();
    expect(bubble!.textContent).toContain('Hmm..');
  });

  it('options rendering as button', async () => {
    fixture.componentRef.setInput('message', 'Test');
    fixture.componentRef.setInput('options', ['Yes', 'No']);
    await fixture.whenStable();

    const buttons = el.querySelectorAll<HTMLButtonElement>('.cd-bubble-option');
    expect(buttons.length).toBe(2);
    expect(buttons[1].textContent).toContain('No');
  });

  it('takes chosen option as picked', async () => {
    fixture.componentRef.setInput('message', 'Test');
    fixture.componentRef.setInput('options', ['Yes', 'No']);
    await fixture.whenStable();

    let picked: string | undefined;
    component.picked.subscribe(v => (picked = v));
    el.querySelectorAll<HTMLButtonElement>('.cd-bubble-option')[1].click();
    expect(picked).toBe('No');
  });

  it('set mood on SVG', async () => {
    fixture.componentRef.setInput('mood', 'cheer');
    await fixture.whenStable();

    expect(el.querySelector('svg')!.classList).toContain('mood-cheer');
  });
});
