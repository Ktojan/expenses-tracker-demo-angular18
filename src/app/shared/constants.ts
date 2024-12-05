import { IRecordsStorage } from "./interfaces";

export const localStorageItem = 'expenses_incomes';

export enum Record {
  Exp = 'expenses',
  Inc = 'incomes',
}

export const BasicCategories = {
  [Record.Exp]: ['Taxes, Fee', 'Services', 'Presents', 'Household', 'Misce'],
  [Record.Inc]: ['Planet leasing', 'Negotiation', 'Selling fraud', 'Misce'],
}

export const initialRecords: IRecordsStorage =
{
  expenses: [ 
  {
    "name": "Babel fish subscription",
    "amount": 22.51,
    "category": "Services",
    "date": "2024-12-03T14:00:00.000Z"
  },
  {
    "name": "Milky Way transit fee",
    "amount": 4321.55,
    "category": "Taxes, Fee",
    "date": "2024-12-02T22:00:00.000Z"
  },
  {
    "name": "Pack of big towels",
    "amount": 9.99,
    "category": "Household",
    "date": "2024-11-28T12:00:00.000Z"
  },
  {
    "name": "Box of Magrathea's tea	",
    "amount": 4200,
    "category": "Presents",
    "date": "2024-11-26T22:00:00.000Z"
  },

  ],
  incomes: [
    {
      "name": "3 towels sell",
      "amount": 24,
      "category": "Negotiation",
      "date": "2024-12-03T12:00:00.000Z"
    },
    {
      "name": "Lottery win",
      "amount": 5000,
      "category": "Misce",
      "date": "2024-11-30T12:00:00.000Z"
    },
    {
      "name": "42 puzzle genuine manual ",
      "amount": 3900,
      "category": "Selling fraud",
      "date": "2024-11-25T12:00:00.000Z"
    },
    {
      "name": "42 puzzle leaflet ",
      "amount": 15.5,
      "category": "Negotiation",
      "date": "2024-11-25T12:00:00.000Z"
    },
  ]
};
