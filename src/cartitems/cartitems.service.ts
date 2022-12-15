import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Cartitem } from './cartitem.entity';

@Injectable()
export class CartitemsService {

  constructor(@InjectRepository(Cartitem) private reppo: Repository<Cartitem>) {}

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
      const cartitems = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: cartitems,
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
      const cartitem = await this.reppo.findOne({ where: { mark } })

      if(!cartitem) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Бараа байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: cartitem,
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
      const cartitem = await this.reppo.findOne({ where: { mark } })

      if(!cartitem) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Бараа байхгүй байна'
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
