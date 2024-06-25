import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import getRemediation from '../utility/';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;
    const errorType = exception.name || 'Error';
    const remediation = getRemediation(errorType);

    const errorResponse = {
      _error: {
        _id: uuidv4(),
        message: exception.message || 'Internal server error',
        statusCode: status,
        type: exception.name || 'Error',
        remediation:
          remediation ||
          'Optional instructions to remediate the error may appear here.',
        occurredAt: new Date().toISOString(),
      },
    };

    response.status(status).json(errorResponse);
  }
}
