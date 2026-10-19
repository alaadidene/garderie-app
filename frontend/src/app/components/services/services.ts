
import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';
import { GarderieApi, GarderieService } from '../../services/garderie-api';

@Component({
  imports: [],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services implements OnInit {
  private garderieApi = inject(GarderieApi);
  private cdr = inject(ChangeDetectorRef);

  services: GarderieService[] = [];
  loading = true;
  error = false;

  ngOnInit(): void {
    this.garderieApi.getServices().subscribe({
      next: (data) => {
        this.services = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des services:', err);
        this.error = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
