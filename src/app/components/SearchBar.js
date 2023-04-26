import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityWeatherFetch } from '../store/reducerActions/weatherSlice';
import { setCity } from '../store/reducerActions/locationSlice';
import { metaData } from '../utils/const';
import './styles/searchBar.css';

export function SearchBar() {
    const city = useSelector((state) => state.location.city);
    const cityFound = useSelector((state) => state.weather.cityFound);
    const dispatch = useDispatch();

    const [inputCity, setInputCity] = useState('');

    useEffect(() => {
        city && dispatch(getCityWeatherFetch(city));
    }, [dispatch, city]);

    useEffect(() => {
        if (cityFound === false) {
            dispatch(setCity(null));
            alert('city does not found');
        }
    }, [dispatch, cityFound]);
    
    return (
        <div>
            <form onSubmit={(event) => {
                dispatch(setCity(inputCity));
                setInputCity('');
                event.preventDefault();
            }}>
                <input
                    className="SearchBar"
                    type="text"
                    value={inputCity}
                    placeholder={metaData?.search_bar_placeholder}
                    onChange={(event) => {
                        setInputCity(event.target.value);
                    }}
                />
            </form>
        </div>
    );
}