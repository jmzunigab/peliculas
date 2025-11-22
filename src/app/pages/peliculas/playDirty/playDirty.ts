import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    templateUrl:'playDirty.html',
    imports: [RouterLink],
})
export class PlayDirty {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}