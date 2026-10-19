
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
