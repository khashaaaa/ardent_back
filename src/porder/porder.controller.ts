import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseStruct } from '../base/response.struct';
import { PorderService } from './porder.service';

@Controller('porder')
export class PorderController {
  constructor(private readonly porderService: PorderService) {}

  @Post()
  async createOne(@Body() body): Promise<ResponseStruct> {
    return this.porderService.createOne(body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.porderService.showAll();
  }

  @Get(':mark')
  async showOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.porderService.showOne(mark);
  }

  @Patch(':mark')
  async editOne(@Param('mark') mark: string, @Body() body): Promise<ResponseStruct> {
    return this.porderService.editOne(mark, body);
  }

  @Delete(':mark')
  async removeOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.porderService.removeOne(mark);
  }
}
