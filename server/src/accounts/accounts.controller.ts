import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dtos/account.dto';
import { UpdateAccountDto } from './dtos/account.dto';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  async findAll() {
    const accounts = await this.accountsService.findAll();
    return { items: accounts };
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('unmasked') unmasked: boolean,
  ): Promise<Account> {
    const account = await this.accountsService.findOne(id, unmasked);
    return account;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    const account = await this.accountsService.update(id, updateAccountDto);
    return account;
  }
}
