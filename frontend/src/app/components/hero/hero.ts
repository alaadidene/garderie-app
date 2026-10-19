
import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { GarderieApi, Garderie } from '../../services/garderie-api';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  private garderieApi = inject(GarderieApi);
  private cdr = inject(ChangeDetectorRef);

  garderie: Garderie | null = null;

  ngOnInit(): void {
    this.garderieApi.getGarderie().subscribe({
      next: (data) => {
        this.garderie = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la garderie:', err);
      },
    });
  }
}
