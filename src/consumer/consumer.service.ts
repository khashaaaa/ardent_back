import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStruct } from '../base/response.struct';
import { Consumer } from './consumer.entity';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class ConsumerService {
  
  constructor(@InjectRepository(Consumer) private reppo: Repository<Consumer>) {}

  async checkOne(email: string): Promise<any> {

    try {
      const consumer = await this.reppo.findOneBy({ email })

      return consumer
    }
    catch(error) {
      throw new NotFoundException({ message: 'Хэрэглэгчийн мэдээлэл олдсонгүй' })
    }
  }

  async createOne(ip: any, paramz: any): Promise<ResponseStruct> {

    try {

      const hashed = await bcrypt.hash(paramz.pass, 10)
      const obj = {
        first_name: paramz.first_name,
        last_name: paramz.last_name,
        email: paramz.email,
        pass: hashed,
        geodata: null
      }
      const data = await this.reppo.save(obj)
  
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
      const consumers = await this.reppo.find()

      return {
        statusCode: HttpStatus.OK,
        data: consumers,
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
      const consumer = await this.reppo.findOneBy({ mark })

      if(!consumer) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          data: null,
          error: 'Хэрэглэгч байхгүй байна'
        }
      }

      return {
        statusCode: HttpStatus.OK,
        data: consumer,
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
      const consumer = await this.reppo.findOne({ where: { mark } })

      if(!consumer) {
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
