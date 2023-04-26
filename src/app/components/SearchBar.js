import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityWeatherFetch } from '../store/reducerActions/weatherSlice';
import { setCity } from '../store/reducerActions/locationSlice';
import { metaData } from '../utils/const';
import './styles/searchBar.css';

export function SearchBar() {
    const city = useSelector((state) => state.location.city);
    const dispatch = useDispatch();

    useEffect(() => {
        city && dispatch(getCityWeatherFetch(city));
    }, [dispatch, city]);

    useEffect(() => {
        dispatch(setCity('Kanpur'));
    }, [dispatch]);
    
    return (
        <input
            className="SearchBar"
            placeholder={metaData?.search_bar_placeholder}
        />
    );
}