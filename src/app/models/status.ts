
export interface Status {
    description: string;
    id: number;
    textid: string;
    name: string;
}

export interface ComplaintType {
    description: string;
    id: number;
    name: string;
    textid: string;
}

export const status: Status[] = [
    {
        "id": 1,
        "name": "Opened",
        "textid": "opened",
        "description": ""
    },
    {
        "id": 2,
        "name": "In Progress",
        "textid": "in_progress",
        "description": ""
    },
    {
        "id": 3,
        "name": "Resolved",
        "textid": "resolved",
        "description": ""
    },
]


export const complaintTypes: ComplaintType[] = [
    {
        "id": 1,
        "name": "Services",
        "textid": "services",
        "description": ""
    },
    {
        "id": 2,
        "name": "Personnel",
        "textid": "personnel",
        "description": ""
    },
    {
        "id": 3,
        "name": "Online",
        "textid": "online",
        "description": ""
    },
    {
        "id": 4,
        "name": "Facilities",
        "textid": "facilities",
        "description": ""
    },
    {
        "id": 5,
        "name": "Technical",
        "textid": "technical",
        "description": ""
    },
    {
        "id": 6,
        "name": "Account",
        "textid": "account",
        "description": ""
    },
    {
        "id": 7,
        "name": "Billing",
        "textid": "billing",
        "description": ""
    },
    {
        "id": 8,
        "name": "Policy",
        "textid": "policy",
        "description": ""
    },
    {
        "id": 9,
        "name": "Other",
        "textid": "other",
        "description": ""
    }
];
