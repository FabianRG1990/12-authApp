import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //*readonly es una propiedad que nos permite hacer que el no pueda ser modificado ni usando el mismo servicio
  private readonly baseUrl: string = environments.baseUrl;
  private http = inject(HttpClient);

  //private _currentUser = signal<User|null>(null);
  //private _authStatus = signal<AuhtStatus>();

  constructor() { }


  login( email: string, password: string ): Observable<boolean> {

    return of(true);
  }
}
