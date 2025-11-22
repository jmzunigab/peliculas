import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    templateUrl:'contactos.html',
    imports: [RouterLink],
})
export class Contactos {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}