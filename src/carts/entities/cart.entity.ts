import { ApiProperty } from '@nestjs/swagger';
// import { Product } from 'src/products/entities/product.entity';
import { Cart } from '@prisma/client';

export class CartEntity implements Cart {
    constructor(partial: Partial<CartEntity>) {
        Object.assign(this, partial);
    }
    @ApiProperty()
    id: number;

    @ApiProperty()
    cost: number;

    @ApiProperty()
    contents: number[]

    // @ApiProperty()
    // cartNumber: number;

    // @ApiProperty()
    // userId: number;

    // @ApiProperty()
    // productId: number;

    // @ApiProperty()
    // Product: [Product]
}
