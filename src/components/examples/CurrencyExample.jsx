import { useAvailableCurrencies, useExchangeRate } from '../../queries/currencyQueries';
import { useCurrencyStore } from '../../stores/currencyStore';

const AmountInput = ({ value, onChange }) => (
    <div className="flex flex-col gap-2">
      <label className="text-subtext0 text-sm">Amount</label>
      <input
        type="number"
        min="0"
        step="0.01"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="p-2 rounded bg-surface0 border border-surface1 text-text"
      />
    </div>
  );
  
  const ConversionResult = ({ amount, fromCurrency, toCurrency, rate }) => {
    const convertedAmount = amount * rate;
    
    return (
      <div className="p-4 rounded bg-surface0 border border-surface1">
        <div className="text-2xl font-bold text-text">
          {amount.toFixed(2)} {fromCurrency} =
        </div>
        <div className="text-3xl font-bold text-blue mt-2">
          {convertedAmount.toFixed(2)} {toCurrency}
        </div>
        <div className="text-sm text-subtext0 mt-2">
          1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
        </div>
      </div>
    );
  };

const CurrencySelect = ({ value, onChange, currencies, label }) => (
  <div className="flex flex-col gap-2">
    <label className="text-subtext0 text-sm">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded bg-surface0 border border-surface1 text-text"
    >
      {currencies.map(([code, name]) => (
        <option key={code} value={code}>
          {code} - {name}
        </option>
      ))}
    </select>
  </div>
);


export const CurrencyExample = () => {
  const { 
    fromCurrency, 
    toCurrency, 
    amount,
    setFromCurrency,
    setToCurrency,
    setAmount
  } = useCurrencyStore();

  const { 
    data: currencies = [], 
    isLoading: loadingCurrencies 
  } = useAvailableCurrencies();

  const { 
    data: rate = 1, 
    isLoading: loadingRate 
  } = useExchangeRate(fromCurrency, toCurrency);

  if (loadingCurrencies) {
    return (
      <div className="bg-surface0 p-6 rounded-lg border border-surface1">
        <div className="text-text">Loading currencies...</div>
      </div>
    );
  }

  return (
    <div className="bg-surface0 p-6 rounded-lg border border-surface1">
      <h3 className="text-xl font-semibold text-text mb-4">
        Currency Converter
      </h3>
      <p className="text-subtext0 mb-6">
        This example demonstrates how render-driven architecture works with async data
        fetching using React Query.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AmountInput 
            value={amount} 
            onChange={setAmount} 
          />
          <CurrencySelect
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
            currencies={currencies}
          />
          <CurrencySelect
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
            currencies={currencies}
          />
        </div>

        {loadingRate ? (
          <div className="text-text">Loading rate...</div>
        ) : (
          <ConversionResult
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            rate={rate}
          />
        )}

        <div className="text-sm text-overlay0">
          <p>Notice how:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>UI state is managed by the store</li>
            <li>Async state is managed by React Query</li>
            <li>Components remain purely presentational</li>
            <li>Loading states are handled declaratively</li>
          </ul>
        </div>
      </div>
    </div>
  );
};