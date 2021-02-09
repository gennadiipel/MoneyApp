import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthService {
    constructor(
        private _httpClient: HttpClient
    ) {}


    get token(): string {
        return null
    }

    login() {}
    logout() {}
    isAuthenticated(): boolean {
        return null
    }
}