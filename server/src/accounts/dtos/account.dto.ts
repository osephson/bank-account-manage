import {
  IsString,
  IsDate,
  ValidateNested,
  IsOptional,
  Length,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BalanceDto } from './balance.dto';
import { IfxType } from '../entities/account.entity';

export class CreateAccountDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  @Length(1, 128)
  name: string;

  @IsString()
  @Length(1, 4096)
  readonly accountType: string;

  @IsString()
  @IsEnum(IfxType)
  readonly ifxType: string;

  @IsString()
  @Length(9, 9)
  readonly routingNumber: string;

  @IsString()
  @Length(8, 32)
  readonly maskedAccountNumber: string;

  @IsString()
  @Length(8, 32)
  readonly fullAccountNumber?: string;

  @ValidateNested()
  @Type(() => BalanceDto)
  readonly balance: BalanceDto;

  @IsDate()
  @Type(() => Date)
  readonly openedAt: Date;
}

export class UpdateAccountDto {
  @IsOptional()
  @IsString()
  @Length(1, 128)
  name: string;
}
