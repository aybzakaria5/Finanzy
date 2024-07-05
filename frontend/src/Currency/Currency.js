import React, { useEffect, useState } from 'react';
import Style from './Currency.module.css';

const Currency = () => {
    const [rate, setRate] = useState(null);
    const [currency, setCurrency] = useState('MAD');
    const [error, setError] = useState(null);
    const apiKey = '4a06765c772559c68a4bb91c'; // Replace with your API key

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
                const data = await response.json();
                if (data.result === 'success') {
                    setRate(data.conversion_rates[currency]);
                } else {
                    setError('Failed to fetch exchange rate');
                }
            } catch (err) {
                setError('Error fetching exchange rate');
            }
        };

        fetchExchangeRate();
    }, [apiKey, currency]);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className={Style.exchangeRateContainer}>
            <h1 className={Style.title}>USD to {currency} Exchange Rate</h1>
            <select onChange={handleCurrencyChange} value={currency} className={Style.selector}>
                <option value="MAD">MAD (Moroccan Dirham)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="KES">KES (Kenyan Shilling)</option>
            </select>
            {error ? (
                <p className={Style.error}>{error}</p>
            ) : rate ? (
                <p className={Style.rate}>1 USD = {rate} {currency}</p>
            ) : (
                <p className={Style.loading}>Loading...</p>
            )}
        </div>
    );
};

export default Currency;
