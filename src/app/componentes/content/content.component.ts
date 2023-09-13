import { Component } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `<div class="bg-primary text-light p-4 rounded">
        <header>
            <h2>{{ title }}</h2>
        </header>
        <div>
            <ng-content></ng-content>
        </div>
    </div>`
})
export class ContentComponent {

    title: string = 'Titulo';

}