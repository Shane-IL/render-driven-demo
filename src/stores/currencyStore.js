import { create } from 'zustand';

export const useCurrencyStore = create((set) => ({
    amount: 1,
    fromCurrency: 'USD',
    toCurrency: 'EUR',

    setAmount: (amount) => set({ amount: amount }),
    setFromCurrency: (currency) => set({ fromCurrency: currency }),
    setToCurrency: (currency) => set({ toCurrency: currency }),
}));