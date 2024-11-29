// Define the Item interface
export interface Item {
    id: number;
}

// Define the ResponseData interface
export interface ResponseData {
    data: Item[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
