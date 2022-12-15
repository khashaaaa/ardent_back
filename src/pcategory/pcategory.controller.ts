import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { PcategoryService } from './pcategory.service';

@Controller('pcategory')
export class PcategoryController {
  constructor(private readonly pcategoryService: PcategoryService) {}

  @Post()
  async createOne(@Body() body: any): Promise<ResponseStruct> {
    return this.pcategoryService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.pcategoryService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.pcategoryService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: number, @Body() body: any): Promise<ResponseStruct> {
    return this.pcategoryService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: number): Promise<ResponseStruct> {
    return this.pcategoryService.removeOne(mark);
  }
}
