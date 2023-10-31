import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
// import { CartEntity } from 'src/carts/entities/cart.entity';

export class ProductEntity implements Product {
    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial)
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    searchID: string;

    @ApiProperty()
    cost: number;

    @ApiProperty()
    count: number;

    @ApiProperty()
    imgURL: string;

    @ApiProperty()
    imgCarousel: [string];

    @ApiProperty()
    desc: string;

    @ApiProperty()
    tag: string

    // @ApiProperty({required: false, nullable: true})
    // productId: number

    // @ApiProperty({required: false, type: CartEntity})
    // Cart?: CartEntity

    // constructor({Cart, ...data}: Partial<ProductEntity>) {
    //     Object.assign(this, data)

    //     if (Cart) {
    //         this.Cart = new CartEntity(Cart)
    //     }
    // }

}
