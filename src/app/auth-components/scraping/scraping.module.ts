import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ScrapingComponent } from "./scraping.component";
import { EmploiComponent } from "../emploi/emploi.component";
import { StageComponent } from "../stage/stage.component";
import { DemandeComponent } from "../demande/demande.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[

EmploiComponent,
StageComponent,
DemandeComponent

    ],
    imports: [
       
      // Autres imports...
      MatToolbarModule,CommonModule
    ],
    // Autres configurations...
  })
  export class ScrapingModule { }
  