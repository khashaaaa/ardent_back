import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private reppo: Repository<Product>) {}

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
      const products = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: products,
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

  async showOne(mark: string): Promise<ResponseStruct> {
    
    try {
      const product = await this.reppo.findOne({ where: { mark } })

      if(!product) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Бараа байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: product,
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

  async editOne(mark: string, paramz: any): Promise<ResponseStruct> {
    
    try {
      const product = await this.reppo.findOne({ where: { mark } })

      if(!product) {
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

  async removeOne(mark: string): Promise<ResponseStruct> {
    
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
