import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Porder } from './porder.entity';

@Injectable()
export class PorderService {

  constructor(@InjectRepository(Porder) private reppo: Repository<Porder>) {}

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
      const porders = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: porders,
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
      const porder = await this.reppo.findOne({ where: { mark } })

      if(!porder) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Дэд категори байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: porder,
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
      const porder = await this.reppo.findOne({ where: { mark } })

      if(!porder) {
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
