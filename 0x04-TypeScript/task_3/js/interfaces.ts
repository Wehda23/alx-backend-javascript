type RowID = number;

interface RowElement {
    firstName: string;
    lastName: string;
    age?: number; // optional
}

export {RowID, RowElement};