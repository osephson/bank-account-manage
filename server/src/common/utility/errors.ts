import { REMEDIATIONS } from '../constants/errors-remediations';

export function getRemediation(errorType: string): string {
  return (
    REMEDIATIONS[errorType] || 'Please contact support for further assistance.'
  );
}
