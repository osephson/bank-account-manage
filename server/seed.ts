import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { AccountsService } from './src/accounts/accounts.service';
import { CreateAccountDto } from './src/accounts/dtos/account.dto';
import * as sampleAccount from './sample-account.json';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const accountsService = app.get(AccountsService);

  const accounts: CreateAccountDto[] = sampleAccount.map((account) => ({
    id: account._id,
    name: account.name,
    accountType: account.accountType,
    ifxType: account.ifxType,
    routingNumber: account.routingNumber,
    maskedAccountNumber: account.accountNumbers.masked,
    fullAccountNumber: account.accountNumbers.full,
    balance: {
      available: account.balance.available,
      currency: account.balance.currency,
    },
    openedAt: new Date(account.openedAt),
  }));

  for (const account of accounts) {
    await accountsService.create(account);
  }

  await app.close();
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
