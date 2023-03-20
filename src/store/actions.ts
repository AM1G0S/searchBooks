import { Book, ErrorObject } from '../constants/interfaces';

export const SET_BOOKS_ARRAY = 'SET_BOOKS_ARRAY';
export const RESET_BOOKS_ARRAY = 'RESET_BOOKS_ARRAY';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const RESET_TOTAL_ITEMS = 'RESET_TOTAL_ITEMS';
export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const INCREMENT_START_INDEX = 'INCREMENT_START_INDEX';
export const IS_LOADING = 'IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const setBooksArray = (searchResult: Book[]) => {
	return { type: SET_BOOKS_ARRAY, searchResult };
};

export const resetBooksArray = () => {
	return { type: RESET_BOOKS_ARRAY };
};

export const setTotalItems = (totalItems: number) => {
	return { type: SET_TOTAL_ITEMS, totalItems };
};

export const resetTotalItems = () => {
	return { type: RESET_TOTAL_ITEMS };
};

export const setSearchValue = (searchValue: string) => {
	return { type: SET_SEARCH_VALUE, searchValue };
};

export const incrementStartIndex = () => {
	return { type: INCREMENT_START_INDEX };
};

export const setIsLoading = (isLoading: boolean) => {
	return { type: IS_LOADING, isLoading };
};

export const setErrorObject = (error: ErrorObject) => {
	return { type: SET_ERROR, error };
};

export const resetErrorObject = () => {
	return { type: RESET_ERROR };
};
