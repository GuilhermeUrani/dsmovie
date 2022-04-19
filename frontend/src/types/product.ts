export type Product = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type ProductPage = {
    content: Product[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}