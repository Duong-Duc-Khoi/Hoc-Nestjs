import { Body,Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";
import { CarsEntity } from "src/entities/cars.entity";
@Controller('products')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getProducts():Promise<ResponseData<CarsEntity[] > >{
        try {
            const products = await this.productService.getProducts();
        return new ResponseData<CarsEntity[]>(products,HttpStatus.SUCCESS,HttpMessage.SUCCESS);
    }
    catch (error) {
        return new ResponseData<CarsEntity[]>(null as any,HttpStatus.ERROR,HttpMessage.ERROR);
    }
}

    @Post()
    async createProduct(@Body(new ValidationPipe())productDto:ProductDto):Promise<ResponseData<CarsEntity>>{
        try {
            const newProduct = await this.productService.createProduct(productDto);
        return  new ResponseData<CarsEntity>(newProduct,HttpStatus.SUCCESS,HttpMessage.SUCCESS);
        }
        catch (error) {
        return new ResponseData<CarsEntity>(null as any,HttpStatus.ERROR,HttpMessage.ERROR);
            } 
}


    @Get('/:id')
    async getProductById(@Param('id') id:number) :Promise<ResponseData<CarsEntity>> {
        try {
            const product = await this.productService.getProductById(id);
        return new ResponseData<CarsEntity>(product,HttpStatus.SUCCESS,HttpMessage.SUCCESS);
        }   
        catch (error) {
        return new ResponseData<CarsEntity>(null as any,HttpStatus.ERROR,HttpMessage.ERROR);
            }   
    }

    @Put('/:id')
    async updateProduct(@Body() ProductDto: ProductDto, @Param('id') id :number) :Promise<ResponseData<CarsEntity>> {
        try {
            const updatedProduct = await this.productService.updateProduct(ProductDto,id);
        return new ResponseData<CarsEntity>(updatedProduct,HttpStatus.SUCCESS,HttpMessage.SUCCESS);
        }   
        catch (error) {
        return new ResponseData<CarsEntity>(null as any,HttpStatus.ERROR,HttpMessage.ERROR);
            }
     
    }

    @Delete('/:id')
    async deleteProduct(@Param('id')id:number):Promise<ResponseData<boolean>> {
        try {
        const deletedProduct = await this.productService.deleteProduct(id);
        return new ResponseData<boolean>(deletedProduct,HttpStatus.SUCCESS,HttpMessage.SUCCESS);
        }       
        catch (error) {
        return new ResponseData<boolean>(null as any,HttpStatus.ERROR,HttpMessage.ERROR);
            }
    }
}