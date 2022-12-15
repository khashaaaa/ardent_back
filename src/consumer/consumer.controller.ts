import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ip, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ResponseStruct } from '../base/response.struct';
import { ConsumerService } from './consumer.service';

@Controller('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Post()
  async createOne(@Ip() ip:any, @Body() body: any): Promise<ResponseStruct> {
    return this.consumerService.createOne(ip, body);
  }

  @Get()
  async showAll(): Promise<ResponseStruct> {
    return this.consumerService.showAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':mark')
  async showOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.consumerService.showOne(mark);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':mark')
  async editOne(@Param('mark') mark: string, @Body() body: any): Promise<ResponseStruct> {
    return this.consumerService.editOne(mark, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':mark')
  async removeOne(@Param('mark') mark: string): Promise<ResponseStruct> {
    return this.consumerService.removeOne(mark);
  }
}
