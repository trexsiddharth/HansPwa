export class HistoryTable {
    history: HistoryType;
}

export class HistoryType {
    contact: HistoryData[];
    reject: HistoryData[];
    shortlist: HistoryData[];
}

export class HistoryData {
    age: number;
    brith_time: string;
    caste: string;
    height: string;
    id: number;
    is_lead: number;
    monthly_income: number;
    name: string;
    photo: string;
    religion: string;
    type: string;
    working_city: string;
}