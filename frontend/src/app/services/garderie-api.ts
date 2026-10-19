
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Garderie {
  nom: string;
  description: string;
  adresse: string;
  telephone: string;
  email: string;
}

export interface GarderieService {
  id: number;
  nom: string;
  description: string;
  icon: string;
}

export interface Activite {
  id: number;
  nom: string;
  categorie: string;
  age: string;
}

@Injectable({
  providedIn: 'root'
})
export class GarderieApi {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  getGarderie(): Observable<Garderie> {
    return this.http.get<Garderie>(`${this.apiUrl}/garderie`);
  }

  getServices(): Observable<GarderieService[]> {
    return this.http.get<GarderieService[]>(`${this.apiUrl}/services`);
  }

  getActivites(): Observable<Activite[]> {
    return this.http.get<Activite[]>(`${this.apiUrl}/activites`);
  }
}
