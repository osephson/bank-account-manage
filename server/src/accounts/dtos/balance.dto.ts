import { IsString } from 'class-validator';

export class BalanceDto {
  @IsString()
  available: string;

  @IsString()
  currency: string;
}
