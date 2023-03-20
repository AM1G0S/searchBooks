import { Action, Book } from '../constants/interfaces';
import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import {
	INCREMENT_START_INDEX,
	IS_LOADING,
	RESET_BOOKS_ARRAY,
	RESET_ERROR,
	RESET_TOTAL_ITEMS,
	SET_BOOKS_ARRAY,
	SET_ERROR,
	SET_SEARCH_VALUE,
	SET_TOTAL_ITEMS,
} from './actions';

export const books = (state: Book[] = [], action: Action): Book[] => {
	switch (action.type) {
		case SET_BOOKS_ARRAY: {
			return Array.isArray(action.searchResult)
				? [...state, ...action.searchResult]
				: state;
		}

		case RESET_BOOKS_ARRAY: {
			return [];
		}

		default:
			return state;
	}
};

export const totalItems = (state = 0, action: Action) => {
	switch (action.type) {
		case SET_TOTAL_ITEMS: {
			return action.totalItems;
		}

		case RESET_TOTAL_ITEMS: {
			return 0;
		}

		default:
			return state;
	}
};

export const startIndex = (state = 30, action: Action) => {
	switch (action.type) {
		case INCREMENT_START_INDEX: {
			const newstate = state + 30;

			return newstate;
		}

		default:
			return state;
	}
};

export const searchValue = (state = '', action: Action) => {
	switch (action.type) {
		case SET_SEARCH_VALUE: {
			return action.searchValue;
		}

		default:
			return state;
	}
};

export const isLoading = (state = false, action: Action) => {
	switch (action.type) {
		case IS_LOADING: {
			return action.isLoading;
		}

		default:
			return state;
	}
};

export const error = (
	state = { title: '', description: '' },
	action: Action
) => {
	switch (action.type) {
		case SET_ERROR: {
			return action.error;
		}

		case RESET_ERROR: {
			return { title: '', description: '' };
		}

		default:
			return state;
	}
};

const rootReducer = combineReducers({
	routerReducer,
	books,
	totalItems,
	searchValue,
	startIndex,
	isLoading,
	error,
});

export default rootReducer;
