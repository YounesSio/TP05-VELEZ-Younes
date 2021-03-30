export class Product {
    public id: number;
    public name: string;
    public price: number;
    public ref: string;
    
    constructor(id:number, name:string, price:number, ref:string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ref = ref;
      }
}