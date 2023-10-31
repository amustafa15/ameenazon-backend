import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

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

}
