import { Injectable } from '@angular/core';
import * as applicationSetting from 'application-settings';
import { LoginResponse } from '../models/login-response';

@Injectable()
export class ApplicationContext {
    private _token: string;
    private _expiredIn: number;

    constructor() {

    }

    get expiredIn(): number {
        return this._expiredIn;
    }

    set expiredIn(value: number) {
        this._expiredIn = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    storeProfile(data: LoginResponse): void {
        this.token = data.access_token;
        this.expiredIn = data.expires_in;
        applicationSetting.setString('profile', JSON.stringify(data));
    }
}
