import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Merchant } from './merchant.entity';

@Injectable()
export class MerchantService {

  constructor(@InjectRepository(Merchant) private reppo: Repository<Merchant>) {}

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
      const merchants = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: merchants,
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
      const merchant = await this.reppo.findOne({ where: { mark } })

      if(!merchant) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Хэрэглэгч байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: merchant,
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
      const merchant = await this.reppo.findOne({ where: { mark } })

      if(!merchant) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Хэрэглэгч байхгүй байна'
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
