import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipeExampleComponent } from './components/date-pipe-example/date-pipe-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipeExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-examples';
}
