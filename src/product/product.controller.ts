import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createOne(@Body() body): Promise<ResponseStruct> {
    return this.productService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.productService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.productService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: string, @Body() body): Promise<ResponseStruct> {
    return this.productService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.productService.removeOne(mark);
  }
}
