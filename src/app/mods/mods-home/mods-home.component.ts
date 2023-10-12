import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items: any = [
    { title: 'Who are you?', content: 'I am ME!' },
    { title: 'Who is ME?', content: 'He is me' },
    { title: 'Than, Who are you?', content: 'I am IDIOT🤷🏻‍♀️' },
  ]
  constructor() { }

  ngOnInit() { }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
