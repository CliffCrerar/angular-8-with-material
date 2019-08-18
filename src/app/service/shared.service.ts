
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TodosService {
  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();

  toggle(todo) {
    this._toggle.next(todo);
  }
}