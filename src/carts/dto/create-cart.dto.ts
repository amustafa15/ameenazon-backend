import { ApiProperty } from "@nestjs/swagger";
// import { Product } from "src/products/entities/product.entity";
// import { UserEntity } from "src/users/entities/user.entity";

export class CreateCartDto {

    // @ApiProperty()
    // id: number;

    @ApiProperty()
    cost: number;

    @ApiProperty()
    contents: [number]
    
    // @ApiProperty()
    // cartNumber: number;

    // @ApiProperty()
    // userId: number;

    // @ApiProperty()
    // productId: number;

    // @ApiProperty()
    // Product: [Product]

}
