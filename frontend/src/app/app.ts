
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Activities } from './components/activities/activities';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, Activities, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
