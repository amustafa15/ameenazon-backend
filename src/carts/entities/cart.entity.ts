import { ApiProperty } from '@nestjs/swagger';
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

}
