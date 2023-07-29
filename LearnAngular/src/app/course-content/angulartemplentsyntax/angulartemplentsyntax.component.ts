import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angulartemplentsyntax',
  templateUrl: './angulartemplentsyntax.component.html',
  styleUrls: ['./angulartemplentsyntax.component.css']
})
export class AngulartemplentsyntaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

}
