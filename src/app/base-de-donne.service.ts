import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ARGONAUTE } from './argonaute/list-argonaute';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDonneService implements InMemoryDbService {
  createDb() {
    const argonautes = ARGONAUTE;
    return { argonautes };
  }
}
