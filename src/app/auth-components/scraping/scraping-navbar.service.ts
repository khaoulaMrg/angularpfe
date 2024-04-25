// scraping-navbar.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrapingNavbarService {
  showScrapingNavbar: boolean = false;

  constructor() { }
}
