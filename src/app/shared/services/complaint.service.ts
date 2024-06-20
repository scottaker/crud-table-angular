import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ComplaintRequest, ComplaintResponse } from "src/app/models";

@Injectable({ providedIn: 'root' })
export class ComplaintService {



    scrubComplaints(response: ComplaintResponse): ComplaintResponse {
        return response;
    }

    get(request: ComplaintRequest): Observable<ComplaintResponse> {
        return of(<ComplaintResponse>{});
    }

    
}
