import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ComplaintRequest, ComplaintResponse } from "src/app/models";

@Injectable({ providedIn: 'root' })
export class ComplaintService {
    apiUrl: string = '';

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:5000/api';
    }

    scrubComplaints(response: ComplaintResponse): ComplaintResponse {
        return response;
    }

    getComplaints(request: ComplaintRequest): Observable<ComplaintResponse> {
        const post = this.post<ComplaintResponse>('/complaint', request);
        return post;
    }


    get<T>(apiPath: string): Observable<T> {
        const url = this.apiUrl + apiPath;
        const get = this.http.get<T>(url);
        return get;
    }

    post<T>(apiPath: string, payload: any): Observable<T> {
        const url = this.apiUrl + apiPath;
        const body = JSON.stringify(payload);
        const options = this.assembleOptions();

        const post = this.http.post<T>(url, body, options);
        return post;
    }

    assembleOptions(): object {
        let options = {
            headers: <HttpHeaders>{}
        };

        //create base headers
        var headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };

        var httpHeaders: HttpHeaders = new HttpHeaders(headers);
        options['headers'] = httpHeaders;
        return options;
    }




}
