import { Record } from './constants';

export interface IRecord {
  name: string;
  amount: number;
  category: string | undefined;
  date: Date | string;
  type?: Record;
}

export interface IRecordsStorage {
  expenses: IRecord[],
  incomes: IRecord[]
}
