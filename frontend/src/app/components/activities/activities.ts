
import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { GarderieApi, Activite } from '../../services/garderie-api';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.html',
  styleUrl: './activities.css',
})
export class Activities implements OnInit {
  private garderieApi = inject(GarderieApi);
  private cdr = inject(ChangeDetectorRef);

  activites: Activite[] = [];
  loading = true;
  error = false;

  ngOnInit(): void {
    this.garderieApi.getActivites().subscribe({
      next: (data) => {
        this.activites = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des activités:', err);
        this.error = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
