import { useQuery } from '@tanstack/react-query';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export function useAvailableCurrencies() {
  return useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
      const data = await response.json();
      return data.supported_codes;
    },
    staleTime: Infinity, // Currency list rarely changes
  });
}

export function useExchangeRate(fromCurrency, toCurrency) {
  return useQuery({
    queryKey: ['rate', fromCurrency, toCurrency],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
      );
      const data = await response.json();
      return data.conversion_rate;
    },
    enabled: Boolean(fromCurrency && toCurrency),
    staleTime: 60 * 1000, // Rates update frequently
  });
}