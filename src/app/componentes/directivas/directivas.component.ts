import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html'
})
export class DirectivasComponent {
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
