export class ResponseModel<T>{
    TotalItem?:number
    Items?: Array<T>
    Size?: number
    CurrentPage?: number
}