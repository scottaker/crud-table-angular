import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Complaint, ComplaintRequest, ComplaintResponse } from "src/app/models";
import { complaintTypes } from "src/app/models/status";

@Injectable({ providedIn: 'root' })
export class ComplaintService {
    apiUrl: string = '';

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:5000/api';
    }

    scrubComplaints(response: ComplaintResponse): ComplaintResponse {
        var complaints = response.complaints.map(x => this.scrub(x));
        const result = <ComplaintResponse>{
            complaints: complaints,
            paging: response.paging
        }
        return result;
    }

    scrub(complaint: Complaint): any {
        
        if (complaint.events) {
            complaint.events = complaint.events.sort((a, b) => new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf());
        }

        return complaint;
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
