import { Component } from '@angular/core';
import { AuthorService } from './authors.service';

@Component({
  selector : 'authors',
  template : ` <h2> {{ title }} </h2>
                <ul>
                    <li *ngFor="let author of authors">
                    {{ author }}
                    </li>
                </ul>`
})
export class AuthorsComponent {

  title = " Authors ";
  authors;

  constructor(service: AuthorService){
    this.authors = service.getAuthors();
  }

}
