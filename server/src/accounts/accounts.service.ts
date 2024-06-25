import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dtos/account.dto';
import { UpdateAccountDto } from './dtos/account.dto';
import { accountResponse } from './utility/response';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = this.accountsRepository.create(createAccountDto);
    return this.accountsRepository.save(account);
  }

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountsRepository.find();
    return accounts.map(accountResponse);
  }

  async findOne(id: string, unmasked: boolean): Promise<Account> {
    const account = await this.accountsRepository.findOne({ where: { id } });
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    if (!unmasked) {
      delete account.fullAccountNumber;
    }

    return accountResponse(account);
  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const account = await this.accountsRepository.findOne({ where: { id } });
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    if (updateAccountDto.name) {
      account.name = updateAccountDto.name;
    }
    const updatedAccount = await this.accountsRepository.save(account);

    delete updatedAccount.fullAccountNumber;

    return accountResponse(updatedAccount);
  }
}
