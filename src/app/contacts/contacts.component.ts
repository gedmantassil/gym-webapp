import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
    contacts = [
      {name: 'Gedmantas Silinskas', email: 'test1@gmail.com'},
      {name: 'Rokas Gudziunas', email: 'test2@gmail.com'},
      {name: 'Rugile Jovaisaite', email: 'test3@gmail.com'},
      {name: 'Simona Gerikaite', email: 'test4@gmail.com'},
  ];

  sendComments(){}
}
