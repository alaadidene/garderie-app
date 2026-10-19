import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { GarderieApi, Garderie } from '../../services/garderie-api';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private garderieApi = inject(GarderieApi);
  private cdr = inject(ChangeDetectorRef);

  garderie: Garderie | null = null;
  loading = true;
  error = false;

  ngOnInit(): void {
    this.garderieApi.getGarderie().subscribe({
      next: (data) => {
        this.garderie = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des coordonnées:', err);
        this.error = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}