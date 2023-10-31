import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    password: string;
}
