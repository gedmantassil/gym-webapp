import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
    contacts = [
      {name: 'Gedmantas Šilinskas', email: 'test1@gmail.com'},
      {name: 'Rokas Gudžiūnas', email: 'test2@gmail.com'},
      {name: 'Rugilė Jovaišaitė', email: 'test3@gmail.com'},
      {name: 'Simona Gerikaitė', email: 'test4@gmail.com'},
  ];

  sendComments(){}
}
