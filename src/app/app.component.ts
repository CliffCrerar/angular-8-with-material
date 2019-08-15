import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" src="../assets/angular.png">
      <div style="text-align:center">
      <h2>
        with Angular Material
      </h2>
    </div>
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
    <li>
    <h3><a class="white-link" target="_blank" rel="noopener" href="https://material.angular.io/">Angular Material</a></h3>
  </li>
      <li>
        <h3><a class="white-link" target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h3>
      </li>
      <li>
        <h3><a class="white-link" target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h3>
      </li>
      <li>
        <h3><a class="white-link" target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h3>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular';
}
