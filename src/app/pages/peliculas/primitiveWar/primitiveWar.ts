import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    templateUrl:'primitiveWar.html',
    imports: [RouterLink],
})
export class PrimitiveWar {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}