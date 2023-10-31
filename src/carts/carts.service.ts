import { Body, Injectable, Param } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}
  create(createCartDto: CreateCartDto) {
    // return 'This action adds a new cart';
    return this.prisma.cart.create({
      data: createCartDto
    }) 
  } 

  findAll() {
    // return `This action returns all carts`;
    return this.prisma.cart.findMany()
  }

  findOne(id: number) { 
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
    // @Param(('id') id: number,
    // return 
    // return this.prisma.cart.update({where: {id}, data: updateCartDto})
    // const cart = this.prisma.cart.findUnique({
    //   where: { id: id }
    // })

    // if (cart) {
    //   cart.contents.push(newId)

    //   const updatedCart = this.prisma.cart.update({
    //     where: {id: id}
    //   }, 
    //   data: {
    //     contents: cart.contents
    //   }
    //   )
    // }
    
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
