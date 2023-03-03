import { Category } from "./category";

export interface IProduct{
    Id: number;
    Name: string;
    Status: boolean
    Description?: string;
    Category: any;
}
export class Product{
    Id: number;
    Name: string;
    Status?: boolean;
    Description?: string;
    Category: any;
}