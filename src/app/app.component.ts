import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  todos =[];

  addTodo(ev){
    console.log(ev);
    this.todos.push(ev.value)
  }
}
