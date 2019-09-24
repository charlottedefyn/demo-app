import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onFrmSumbmit(f) {
      if (!f.valid) {
        console.log('des champs non conformes avant validation');
        return ;
      }

      console.log(f.value);
      // réaliser des traitements comme
      // enregistrer le contenu dans une BDD via une API
      // vider le formulaire
      // réaliser une redirection
    }

}
