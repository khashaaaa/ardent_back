import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { PaymethodService } from './paymethod.service';

@Controller('paymethod')
export class PaymethodController {
  constructor(private readonly paymethodService: PaymethodService) {}

  @Post()
  async createOne(@Body() body: any): Promise<ResponseStruct> {
    return this.paymethodService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.paymethodService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.paymethodService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: string, @Body() body: any): Promise<ResponseStruct> {
    return this.paymethodService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.paymethodService.removeOne(mark);
  }
}
