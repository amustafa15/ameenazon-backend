import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {

    @ApiProperty()
    cost: number;

    @ApiProperty()
    contents: [number]

}
