import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";
@Injectable()
 export class ProductService {
    private products: Product[] = [
        { id: 1, categoryId: 1, price: 10000,productName:'keyboard' },
        { id: 2, categoryId: 1, price: 20000,productName:'mouse' },
        { id: 3, categoryId: 1, price: 20000,productName:'monitor' },
        { id: 4, categoryId: 2, price: 30000,productName:'printer' },
    ];
     
         getProducts():Product[] {
             return this.products ; 
         }
     
      
         createProduct():string {
             return  'Product created successfully' ;
         }
     
    
         getProductById(id:number) :Product {
             return this.products.find(item => item.id ===Number(id)) as Product;
         }
     
      
         updateProduct() :string {
             return 'Product updated successfully' ;
         }
     
        
         deleteProduct():string {
             return 'Product deleted successfully' ;
         }
 }