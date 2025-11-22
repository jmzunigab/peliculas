import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";



@Component({
    templateUrl:'principal.html',
    imports: [RouterLink],

})
export class PrincipalPage {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}