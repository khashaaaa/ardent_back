import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post()
  async createOne(@Body() body: any): Promise<ResponseStruct> {
    return this.merchantService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.merchantService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.merchantService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: string, @Body() body: any): Promise<ResponseStruct> {
    return this.merchantService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.merchantService.removeOne(mark);
  }
}
