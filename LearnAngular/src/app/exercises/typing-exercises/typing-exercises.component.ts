import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-typing-exercises',
  templateUrl: './typing-exercises.component.html',
  styleUrls: ['./typing-exercises.component.css']
})
export class TypingExercisesComponent {

  ramdomText = faker.lorem.sentences();
  enteredText = '';
  showSuccess: boolean = false;

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.enteredText = inputElement.value;
    if (this.ramdomText === this.enteredText) {
      this.showSuccess = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
