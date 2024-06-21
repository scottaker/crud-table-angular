

export interface Event {
    eventID: string;
    complaintID: string;
    eventType: string;
    comments: string;
    timestamp: Date;
    employeeID: string;
}

export interface EventType {
    id: number,
    name: string,
    textid: string
}


export const EventTypes: Array<EventType> = [

    {
        "id": 1,
        "name": "Assignment",
        "textid": "assignment"
    },
    {
        "id": 2,
        "name": "Customer Interaction",
        "textid": "customer_interaction"
    },
    {
        "id": 3,
        "name": "Customer Interaction Attempt",
        "textid": "customer_interaction_attempt"
    },
    {
        "id": 4,
        "name": "Staff Interaction",
        "textid": "staff_interaction"
    },
    {
        "id": 5,
        "name": "Staff Interaction Attempt",
        "textid": "staff_interaction_attempt"
    },
    {
        "id": 6,
        "name": "Resolution",
        "textid": "resolution"
    },
    {
        "id": 7,
        "name": "Note",
        "textid": "note"
    },
    {
        "id": 8,
        "name": "Other",
        "textid": "other"
    }
];
