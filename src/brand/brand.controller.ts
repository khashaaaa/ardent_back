import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async createOne(@Body() body: any): Promise<ResponseStruct> {
    return this.brandService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.brandService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.brandService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: number, @Body() body: any): Promise<ResponseStruct> {
    return this.brandService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.brandService.removeOne(mark);
  }
}
