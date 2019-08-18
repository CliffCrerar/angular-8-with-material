import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.css']
})
export class AddTodoComponentComponent /*implements OnInit */{

  control : FormControl = new FormControl("");
  @Output() add = new EventEmitter();

  // constructor() { }

  // ngOnInit() {
  // }

}
