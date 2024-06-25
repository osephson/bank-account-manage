import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Account } from './account.entity';
import { IsString } from 'class-validator';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsString()
  available: string;

  @Column()
  @IsString()
  currency: string;

  @OneToOne(() => Account, (account) => account.balance)
  account: Account;
}
