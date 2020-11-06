export interface Product {
    id?: number;
    name?: string;
    description?: string;
    cost?: string;
    stock?: number;   
    images: string[];
    category_product?: string[];
}