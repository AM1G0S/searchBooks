import * as React from 'react';
import './Header.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SearchIcon from '@mui/icons-material/Search';
import { getVolumesByTerms } from '../../api/api';
import {
  resetBooksArray,
  resetErrorObject,
  resetTotalItems,
  setBooksArray,
  setErrorObject,
  setIsLoading,
  setSearchValue,
  setTotalItems,
} from '../../store/actions';
import TextField from '@mui/material/TextField';
import { FILTERS } from '../../constants/filters';

type FormInputs = {
  searchValue: string;
  sortBy: string;
  categories: string;
};

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading);
  const [sortBy, setSortBy] = useState('Relevance');
  const [category, setCategory] = useState('All');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    if (/^\s*$/.test(data.searchValue)) {
      const error = {
        title: 'Пустой поисковый запрос',
        description: '',
      };

      dispatch(setErrorObject(error));
      return;
    }

    dispatch(resetErrorObject());
    dispatch(setIsLoading(true));
    dispatch(resetTotalItems());
    dispatch(resetBooksArray());

    const categoryOption = category === 'All' ? '' : `+subject:${category}`;
    const sortingOption = sortBy === 'Relevance' ? '' : `&orderBy=${sortBy}`;
    const searchOptions = `${categoryOption}${sortingOption}`;
    const searchValue = encodeURIComponent(data.searchValue);

    try {
      const searchResults = await getVolumesByTerms(searchValue, searchOptions);

      if (searchResults.totalItems > 0) {
        dispatch(setBooksArray(searchResults.items));
        dispatch(setTotalItems(searchResults.totalItems));

        return;
      }

      throw new Error('Ничего не найдено');
    } catch (error) {
      if (error instanceof Error) {
        const errorObject = { title: error.name, description: error.message };

        dispatch(setErrorObject(errorObject));
      }
    } finally {
      dispatch(setSearchValue(searchValue));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <AppBar
      className="header"
      data-testid="header"
      sx={{
        flexGrow: 1,
        position: 'fixed',
        background: `url('./ZoCtEVBYKzo.jpg') no-repeat top center / cover`,
      }}
    >
      <h1 className="header__title" data-testid="header-title">
        Book search
      </h1>
      <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="search">
          <div className="search__input-container">
            <TextField
              data-testid="search-input"
              variant="outlined"
              className="search-input"
              sx={{
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: '4px 0 0 4px',
                outline: 'none',
                border: 'none',
              }}
              placeholder="Type here for searching…"
              {...register('searchValue', { required: 'Nothing to search!' })}
            />
            <Button
              variant="text"
              sx={{
                padding: '6px 16px',
                minWidth: '0',
                height: '100%',
                backgroundColor: '#87A8EC',
                borderRadius: '0 4px 4px 0',
              }}
              className="search__btn"
              data-testid="search-btn"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              <SearchIcon sx={{ color: '#fff' }} />
            </Button>
          </div>

          {errors.searchValue && <p>Value is required!</p>}
        </div>

        <div className="search__options">
          <select
            defaultValue="relevance"
            className="search__sortBy"
            data-testid="search-sortBy"
            {...register('sortBy')}
            onChange={(event) => setSortBy(event.target.value as string)}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>

          <select
            defaultValue="All"
            className="search__categories"
            data-testid="search-categories"
            {...register('categories')}
            onChange={(event) => setCategory(event.target.value as string)}
          >
            <option value="0" disabled>
              Categories
            </option>
            <option value={FILTERS.ALL}>{FILTERS.ALL}</option>
            <option value={FILTERS.ART}>{FILTERS.ART}</option>
            <option value={FILTERS.BIORAPHY}>{FILTERS.BIORAPHY}</option>
            <option value={FILTERS.COMPUTERS}>{FILTERS.COMPUTERS}</option>
            <option value={FILTERS.HISTORY}>{FILTERS.HISTORY}</option>
            <option value={FILTERS.MEDICAL}>{FILTERS.MEDICAL}</option>
            <option value={FILTERS.POETRY}>{FILTERS.POETRY}</option>
          </select>
        </div>
      </form>
    </AppBar>
  );
};
