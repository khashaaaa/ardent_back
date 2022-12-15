import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { PsubcategoryService } from './psubcategory.service';

@Controller('psubcategory')
export class PsubcategoryController {
  constructor(private readonly psubcategoryService: PsubcategoryService) {}

  @Post()
  async createOne(@Body() body: any): Promise<ResponseStruct> {
    return this.psubcategoryService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.psubcategoryService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.psubcategoryService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: number, @Body() body: any): Promise<ResponseStruct> {
    return this.psubcategoryService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.psubcategoryService.removeOne(mark);
  }
}
