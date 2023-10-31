import { Body, Injectable, Param } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}
  create(createCartDto: CreateCartDto) {
    return this.prisma.cart.create({
      data: createCartDto
    }) 
  } 

  findAll() {
    return this.prisma.cart.findMany()
  }

  findOne(id: number) { 
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
    
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
