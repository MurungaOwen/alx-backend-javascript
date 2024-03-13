export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;

export type RowID = number;
export type RowElement = {
  firstName: string;
  lastName: string;
  age?: number;
};
