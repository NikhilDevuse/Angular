import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
