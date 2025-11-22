import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    templateUrl:'./theWomanInCabin10.html',
    imports: [RouterLink],
})
export class WomanCabin {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}