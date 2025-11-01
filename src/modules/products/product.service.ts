import { Injectable, Param } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
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
     
      
         createProduct(productDto: ProductDto):Product {
            const product: Product = {
                id: Math.random(),
                ...productDto
            };
            this.products.push(product);
             return  product; 
         }
     
    
         getProductById(id:number) :Product {
             return this.products.find(item => item.id ===Number(id)) as Product;
         }
     
      
         updateProduct(productDto: ProductDto, id :number) :Product {
            const index = this.products.findIndex(item => item.id === Number(id));
            this.products[index].categoryId = productDto.categoryId;
            this.products[index].productName = productDto.productName;
            this.products[index].price = productDto.price;
             return this.products[index];
         }
     
        
         deleteProduct():string {
             return 'Product deleted successfully' ;
         }
 }