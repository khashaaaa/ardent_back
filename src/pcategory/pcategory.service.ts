import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Pcategory } from './pcategory.entity';

@Injectable()
export class PcategoryService {

  constructor(@InjectRepository(Pcategory) private reppo: Repository<Pcategory>) {}

  async createOne(paramz: any): Promise<ResponseStruct> {
    
    try {
      const data = await this.reppo.save(paramz)
  
      return {
        statusCode: HttpStatus.CREATED,
        data: data,
        error: null
      }
    }
    catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error
      }
    }
  }

  async showAll(): Promise<ResponseStruct> {
    
    try {
      const categories = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: categories,
        error: null
      }
    }
    catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error
      }
    }
  }

  async showOne(mark: number): Promise<ResponseStruct> {
    
    try {
      const category = await this.reppo.findOne({ where: { mark } })

      if(!category) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Дэд категори байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: category,
        error: null
      }
    }
    catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error
      }
    }
  }

  async editOne(mark: number, paramz: any): Promise<ResponseStruct> {
    
    try {
      const category = await this.reppo.findOne({ where: { mark } })

      if(!category) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Дэд категори байхгүй байна'
        }
      }

      const updated = await this.reppo.update(mark, paramz)

      return {
        statusCode: HttpStatus.OK,
        data: updated,
        error: null
      }
    }
    catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error
      }
    }
  }

  async removeOne(mark: number): Promise<ResponseStruct> {
    
    try {
      const deleted = await this.reppo.delete(mark)

      return {
        statusCode: HttpStatus.OK,
        data: deleted,
        error: null
      }
    }
    catch(error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error
      }
    }
  }
}
