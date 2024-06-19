export interface Branch {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string | null;
    phone: string;
    email: string;
}


export interface Employee {
    id: string;

    branch_id: string;
    department: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    position: string;
}
