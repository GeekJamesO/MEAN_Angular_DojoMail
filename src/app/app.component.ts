import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails = [
    { address: "Bill@gates.com",   importance: true,  subject:"New Windows", contents: "Windows XI will launch in year 2100." },
    { address: "Ada@lovelace.com", importance: true,  subject:"Programming", contents:"Enchantress of Numbers"},
    { address: "John@carmac.com",  importance: false, subject:"Update Algorithms", contents:"New algorithm for shadow volumes."},
    { address: "Gabe@newel.com",   importance: false, subject:"HL3!", contents:"Just kidding.."}
];
}
