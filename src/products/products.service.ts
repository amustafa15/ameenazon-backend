import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    // return 'This action adds a new product';
    return this.prisma.product.create({
      data: createProductDto
    })
  }

  findAll() {
    // return `This action returns all products`;
    console.log("all products = ", this.prisma.product.findMany())
    return this.prisma.product.findMany()
  }

  findOne(id: number) {
    // return `This action returns a #${id} product`;
    return this.prisma.product.findUnique({where: {id: id}})
  }

  searchForOne(searchID: string) {
    // console.log("the prooduct by name = ", this.prisma.product.findUniqueOrThrow({where: {name: name}}))
    // return this.prisma.product.findFirstOrThrow({where: {name: name}})
    // return `this returns a #${name} product`
    
    return this.prisma.product.findUnique({where: {searchID : searchID}})
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
