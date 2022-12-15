import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { CartitemsService } from './cartitems.service';

@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartitemsService: CartitemsService) {}

  @Post()
  async createOne(@Body() body): Promise<ResponseStruct> {
    return this.cartitemsService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.cartitemsService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.cartitemsService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: number, @Body() body): Promise<ResponseStruct> {
    return this.cartitemsService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.cartitemsService.removeOne(mark);
  }
}
