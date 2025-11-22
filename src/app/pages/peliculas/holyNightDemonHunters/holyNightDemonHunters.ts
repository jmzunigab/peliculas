import { Component } from "@angular/core";
import { Router, RouterLink} from "@angular/router";

@Component({
    templateUrl:'./holyNightDemonHunters.html',
    imports: [RouterLink],
})
export class DemonHunters {
    constructor(private ruta: Router){

    }
    irApagina(url: string): void{
        this.ruta.navigate([url])
    };
}