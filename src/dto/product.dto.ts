import { MinLength,IsNotEmpty,IsNumber } from "class-validator";

export class ProductDto {
    @IsNotEmpty({ message: "Category ID should not be empty." })
    categoryId?: number;
    @MinLength(5, { message: "This field must be at least 5 characters long." })
    productName?: string;
    @IsNumber()
    price?: number;
}