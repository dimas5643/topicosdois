import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoadorEntity } from './doador.entity';

@Injectable()
export class DoadorService {
  constructor(
    @InjectRepository(DoadorEntity)
    private readonly doadorRepository: Repository<DoadorEntity>,
  ) {}

  async findAll(): Promise<DoadorEntity[]> {
    return this.doadorRepository.find();
  }


  async findOne(id: string): Promise<DoadorEntity> {
    const doador = await this.doadorRepository.findOne({
      where: { id },});
    if (!doador) {
      throw new NotFoundException('Doador não encontrado');
    }
    return doador;
  }

  async create(doadorData: DoadorEntity): Promise<DoadorEntity> {
    const newDoador = this.doadorRepository.create(doadorData);
    return this.doadorRepository.save(newDoador);
  }

  async update(id: string, doadorData: DoadorEntity): Promise<DoadorEntity> {
    await this.doadorRepository.update(id, doadorData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.doadorRepository.delete(id);
  }
}
