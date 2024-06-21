import type { Branch, Employee } from "./branch";
import type { Event } from "./event";
import type { Status, ComplaintType } from "./status";

export interface Complaint {
    id: number;
    complaintType: any;
    status: Status;
    severity: number;
    description: string;
    resolution: string | null;

    customerId: string;
    customerFName: string;
    customerLName: string;
    customerPhone: string;
    customerEmail: string;

    branch: Branch;
    employee: Employee;

    events: Array<Event>;

    complaintDate: Date;
    incidentDate: Date;
    resolutionDate: Date;
}

export interface ComplaintResponse {
    paging: Paging;
    complaints: Array<Complaint>;
}

export interface ComplaintRequest {
    paging: Paging;
    complaintSort: ComplaintSort;
    sortAscending: boolean;
}

export function defaultComplaintRequest(): ComplaintRequest {

    return <ComplaintRequest>{
        complaintSort: ComplaintSort.default,
        sortAscending: true,
        paging: Paging.default()
    }
}

export enum ComplaintSort {
    default,
    severity,
    branch,
    date,
}

const pageSizeDefault: number = 20;
export class Paging {
    currentPage: number;
    pageSize: number;
    pageCount: number;

    constructor(data: { currentPage: number; pageSize: number; pageCount: number }) {
        this.currentPage = data.currentPage;
        this.pageSize = data.pageSize;
        this.pageCount = data.pageCount;
    }

    static default(): Paging {
        return <Paging>{
            currentPage: 1,
            pageCount: pageSizeDefault
        }
    }
}


