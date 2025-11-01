import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";
import { CarsEntity } from "src/entities/cars.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class ProductService {
    // private products: Product[] = [
    //     { id: 1, categoryId: 1, price: 10000, productName: 'keyboard' },
    //     { id: 2, categoryId: 1, price: 20000, productName: 'mouse' },
    //     { id: 3, categoryId: 1, price: 20000, productName: 'monitor' },
    //     { id: 4, categoryId: 2, price: 30000, productName: 'printer' },
    // ];

    constructor(
        @InjectRepository(CarsEntity)
        private productsRepository: Repository<CarsEntity>,
    ) { }


    async getProducts(): Promise<CarsEntity[]> {
        return await this.productsRepository.find();
    }



    async createProduct(productDto: ProductDto): Promise<CarsEntity> {
        const newProduct = this.productsRepository.create({
            productName: productDto.productName,
            category_id: productDto.categoryId,
            price: productDto.price,
        });

        return await this.productsRepository.save(newProduct);
    }


    async getProductById(id: number): Promise<CarsEntity | null> {
        return await this.productsRepository.findOneBy({ id });
    }


    async updateProduct(productDto: ProductDto, id: number): Promise<CarsEntity | null> {
        const existingProduct = await this.productsRepository.findOneBy({ id });
        if (!existingProduct) {
            return null;
        }

        await this.productsRepository.update(id, {
            productName: productDto.productName,
            category_id: productDto.categoryId,
            price: productDto.price,
        });

        return await this.productsRepository.findOneBy({ id });
    }




    async deleteProduct(id: number): Promise<boolean> {
        
        const result = await this.productsRepository.delete(id);
        return result.affected! > 0;
}
}