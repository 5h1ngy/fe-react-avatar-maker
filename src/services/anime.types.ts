// Define the Image interface
export interface Image {
    id: string;
    thumbnail: string;
}

// Define the Item interface
export interface Item {
    id: string;
    title: string;
    type: string;
    season: string | null;
    year_start: number;
    image: Image;
}

// Define the ResponseData interface
export interface ResponseData {
    occurrences: Item[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

// Define the ResponseData interface
export interface Response {
    occurrences: Item[];
}
