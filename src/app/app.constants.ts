import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://task.lafrime.net/artists/";
    public ApiUrl: string = "api.php/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
