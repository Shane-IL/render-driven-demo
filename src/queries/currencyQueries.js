import { useQuery } from '@tanstack/react-query';

const API_KEY = 'YOUR_API_KEY'; // We'll need to get one from exchangerate-api.com
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export function useAvailableCurrencies() {
  return useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
      const data = await response.json();
      return data.supported_codes; // Returns [["USD", "US Dollar"], ["EUR", "Euro"], ...]
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