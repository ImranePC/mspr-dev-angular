import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Officine } from "./models/officine";
import { SlimapiService } from "./services/slimapi.service";

@Injectable()
export class Globals {
    private selectedOfficineId!: number;
    connected: any = {
        state: false,
        user: []
    }

    constructor (private router: Router, private slimapi: SlimapiService) {
        // Load if already exist
        if (localStorage.getItem("connection") != null) {
            let data: any = localStorage.getItem("connection");
            this.connected = JSON.parse(data);
        }

        if (localStorage.getItem("officineId") != null) {
            this.selectedOfficineId = Number(localStorage.getItem("officineId"));
        }
    
        //if (this.connected.state == true) {
        //    this.slimapi.getClosestOfficine().subscribe(result => this.selectedOfficineId = result.data.id);
        //}
    }

    getSelectedOfficineId(): number {
        return this.selectedOfficineId;
    }

    setSelectedOfficineId(id: number):void {
        localStorage.setItem("officineId", String(id));
        this.selectedOfficineId = id;
    }

    setConnectionValues(state: boolean, user: any): void {
        this.connected.state = state;
        this.connected.user = user;
        localStorage.setItem("connection", JSON.stringify(this.connected));
    }

    unsetConnectionValues(): void {
        localStorage.removeItem("connection");
        this.connected.state = false;
    }

    isConnected(redirectToHome: boolean = false): void {
        if (this.connected.state == true) {
            if (this.selectedOfficineId == undefined) {
                console.log('No officine selected');
                this.router.navigate(['/select-officine']);
            }
            if (redirectToHome == true) this.router.navigate(['/home']);
        } else {
            this.router.navigate(['/login']);
        }
    }

}