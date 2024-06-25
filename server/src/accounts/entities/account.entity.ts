import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Balance } from './balance.entity';
import { IsEnum, IsString, Length } from 'class-validator';

export enum IfxType {
  DDA = 'DDA',
  SDA = 'SDA',
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 128 })
  @IsString()
  @Length(1, 128)
  name: string;

  @Column({ length: 4096 })
  @IsString()
  accountType: string;

  @Column({ type: 'enum', enum: IfxType })
  @IsEnum(IfxType)
  ifxType: string;

  @Column({ length: 9 })
  @IsString()
  @Length(9, 9)
  routingNumber: string;

  @Column()
  @IsString()
  @Length(8, 32)
  maskedAccountNumber: string;

  @Column()
  @IsString()
  @Length(8, 32)
  fullAccountNumber?: string;

  @OneToOne(() => Balance, (balance) => balance.account, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  balance: Balance;

  @Column('timestamp')
  openedAt: Date;
}
