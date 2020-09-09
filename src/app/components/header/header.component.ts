import { Component } from "@angular/core";
import { PageDataService } from '../../services/page.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {

    tituloDaPagina = 'CMail'; // Nova propriedade.

    // Injeção de PageDataService.
    constructor(private pageService: PageDataService) {
        // Assinando titulo de PageDataService.
        this.pageService
            .titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    private _isMenuOpen = false;

    get isMenuOpen() {
        return this._isMenuOpen;
    }
    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

}
