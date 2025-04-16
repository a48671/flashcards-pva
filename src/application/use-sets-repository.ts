import { SetsRepository } from '@/infrastructure/repositories/sets-repository';
import { useCallback } from 'react';

const repository = new SetsRepository();

export function useSetsRepository() {
  const getSets = useCallback(() => repository.getSets(), []);

  return { getSets };
}