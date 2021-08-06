import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Globals {
    connected: any = {
        state: false,
        user: []
    }

    constructor (private router: Router) {
        // Load if already exist
        if (localStorage.getItem("connection") != null) {
            let data: any = localStorage.getItem("connection");
            this.connected = JSON.parse(data);
        }
    }

    setConnectionValues(state: boolean, user: any): void {
        this.connected.state = state;
        this.connected.user = user;
        localStorage.setItem("connection", JSON.stringify(this.connected));
    }

    unsetConnectionValues(): void {
        localStorage.clear();
        this.connected.state = false;
    }

    isConnected(redirectToHome: boolean = false): void {
        if (this.connected.state == true) {
            if (redirectToHome == true) this.router.navigate(['/home']);
        } else {
            this.router.navigate(['/login']);
        }
    }

}