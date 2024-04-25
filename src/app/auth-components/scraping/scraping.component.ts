import { Component } from '@angular/core';
import { StorageService } from '../../auth-services/storage-services/storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent {
 
 
showScraping: any;

showScrapingNavbar: boolean = false;
scrapingNavbarService: any;
 

  toggleScraping() {
    this.showScrapingNavbar = true;
    
  }
logout() {
StorageService.signout();
this.router.navigateByUrl("/login");


}
  title = 'pfeAngular';
  isAdminLoggedIn: boolean = false;
  isCustomerLoggedIn: boolean = false;
selectedOption: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation des états d'authentification
    this.updateLoginStates();
    
    // Abonnement aux événements du routeur
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Met à jour les états d'authentification lors de la navigation
        this.updateLoginStates();
      }
    });
  }

  // Méthode pour mettre à jour les états d'authentification
  updateLoginStates(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour des états d\'authentification:', error);
    }
  }
}
