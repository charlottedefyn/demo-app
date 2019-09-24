import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
        <p>
          &#169;
          {{ dt | date:"yyyy" }}
           -
          <a [href]="site.url">{{site.domaine}}</a>
        </p>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  dt: Date = new Date();
  site = {
    url: 'http://domaine.com',
    domaine : 'domaine.com'
  };

}
