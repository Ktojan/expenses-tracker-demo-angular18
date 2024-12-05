import { computed, effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initialRecords, localStorageItem, Record } from './shared/constants';
import { IRecord, IRecordsStorage } from './shared/interfaces';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  private records$: BehaviorSubject<IRecordsStorage> = new BehaviorSubject<IRecordsStorage>(initialRecords);
  public expensesSumSignal = signal<number>(0);
  public incomesSumSignal = signal<number>(0);
  public currentBalance = computed(() => Math.round(this.incomesSumSignal() - this.expensesSumSignal()));

  balanceChecker = effect(() => {
    if (this.currentBalance() < 0) setTimeout(() => alert('Wow, your balance is negative!'), 777);
  });

  initData(): void {
    const savedRecords = localStorage.getItem(localStorageItem);
    this.setRecords(savedRecords ? JSON.parse(savedRecords) as IRecordsStorage : initialRecords);
  }

  setRecords(value: IRecordsStorage): void {
    this.records$.next(value);
    localStorage.setItem(localStorageItem, JSON.stringify(value));
    this.expensesSumSignal.set(value[Record.Exp].reduce((acc, item) => acc + Number(item.amount), 0));
    this.incomesSumSignal.set(value[Record.Inc].reduce((acc, item) => acc + Number(item.amount), 0));
  }

  getRecords(): BehaviorSubject<IRecordsStorage> {
    return this.records$;
  }

  addRecord(record: IRecord, type: Record): void {
    const recordsObject = this.records$.getValue();
    recordsObject[type].unshift(record);
    this.setRecords(recordsObject);
  }

  removeLastRecord(type: Record) {
    const recordsObject = this.records$.getValue();
    recordsObject[type].shift();
    this.setRecords(recordsObject);
  }
}


