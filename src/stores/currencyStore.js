import { create } from 'zustand';

export const useCurrencyStore = create((set) => ({
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  amount: 1,

  setFromCurrency: (currency) => set({ fromCurrency: currency }),
  setToCurrency: (currency) => set({ toCurrency: currency }),
  setAmount: (amount) => set({ amount: amount }),

}));