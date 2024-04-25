import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrl: './emploi.component.css'
})
export class EmploiComponent {
foods: any;
  constructor (private FormFiledModule :MatFormFieldModule ){}



  onSearch(searchQuery: string): void {
    console.log('Recherche:', searchQuery);
    // Ajoutez ici votre logique de recherche
  }
}
