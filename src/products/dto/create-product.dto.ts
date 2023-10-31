import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    @ApiProperty()
    name: string

    @ApiProperty()
    cost: number

    @ApiProperty()
    count: number

    @ApiProperty()
    tag: string

    @ApiProperty()
    searchID: string

    @ApiProperty({default: '/Product Images/brooklyn-bridge.png'})
    imgURL: string

    @ApiProperty({default: 
        ["/Details Images/brooklyn bridge 1375px.png",
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn bridge GONY 900px.png"]
    })
    imgCarousel: [string]

    @ApiProperty()
    desc: string
}
