import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'Valentina';
  message: string = 'fsdfsd';
  showTitle: boolean = false;

  data: Array<any> = [
    {
      title: 'Titulo',
      text: 'Text'
    },
    {
      title: 'Titulo',
      text: 'Text'
    },
    {
      title: 'Titulo',
      text: 'Text'
    },
    {
      title: 'Titulo',
      text: 'Text'
    }
  ];

}
