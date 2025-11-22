import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    templateUrl:'./captainHookTheCursedTides.html',
    imports: [RouterLink],
})
export class CaptainHook {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}