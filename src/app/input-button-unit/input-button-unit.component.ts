import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World!';

  constructor() {
    this.changeTitle('My First Angular App');
    console.log('in constructor: '+ this.title)
   }

  ngOnInit(): void {
    this.changeTitle('I love Angular!');
    console.log('in ngOnInit: '+ this.title)
  }

  changeTitle(newTitle: string){
    this.title = newTitle;
  }
}
