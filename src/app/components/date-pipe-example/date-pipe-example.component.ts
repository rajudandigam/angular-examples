import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-pipe-example',
  imports: [DatePipe],
  templateUrl: './date-pipe-example.component.html',
  styleUrl: './date-pipe-example.component.scss'
})
export class DatePipeExampleComponent {
  currentDate = new Date();
}
