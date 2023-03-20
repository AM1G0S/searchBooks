import {
	books,
	totalItems,
	searchValue,
	startIndex,
	isLoading,
	error,
} from './reducer';

import { BOOK_ARRAY } from '../constants/constants';
import {
	incrementStartIndex,
	resetBooksArray,
	resetErrorObject,
	resetTotalItems,
	setBooksArray,
	setErrorObject,
	setIsLoading,
	setSearchValue,
	setTotalItems,
} from './actions';

describe('reducer', () => {
	test('should return the initial state', () => {
		expect(
			books(undefined, { type: 'create', searchResult: BOOK_ARRAY })
		).toEqual([]);
		expect(totalItems(undefined, { type: 'new', totalItems: 0 })).toBe(0);
		expect(startIndex(30, { type: 'new' })).toBe(30);
		expect(searchValue('', { type: 'new', searchValue: 'sgsgshs' })).toBe('');
		expect(isLoading(false, { type: 'new', isLoading: true })).toBe(false);
		expect(
			error(
				{ title: '', description: '' },
				{ type: 'new', error: { title: 'dfdfdf', description: 'dfdfdf' } }
			)
		).toEqual({ title: '', description: '' });
	});

	test('should add books to empty array', () => {
		expect(books([], setBooksArray([BOOK_ARRAY[0]]))).toEqual([
			{
				id: '1qceEAAAQBAJ',

				volumeInfo: {
					title: 'Система модулей Java',
					authors: ['Парлог Николай'],
					description:
						'Создать надёжное и безопасное приложение гораздо проще, если упаковать код в аккуратные блоки. Система модулей в Java представляет собой языковой стандарт для создания таких блоков. Теперь вы можете контролировать взаимодействия различных JAR и легко обнаруживать недостающие зависимости. Фундаментальные изменения архитектуры затронули ядро Java, начиная с версии 9. Все API ядра распространяются в виде модулей, а для библиотек, фреймворков и приложений аналогичный подход можно считать хорошей практикой и рекомендацией. Вы освоите наилучшие практики модульного проектирования, отладки приложения и его развертывания перед сдачей в продакшен. В этой книге - Архитектура модульного приложения Java. - Создание модулей: от исходников до JAR-файлов. - Миграция на версию Java с модулями. - Избавление от зависимостей и оттачивание API. - Обработка рефлексии и версионирование.',
					categories: ['Computers'],
					imageLinks: {
						smallThumbnail:
							'http://books.google.com/books/content?id=1qceEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
						thumbnail:
							'http://books.google.com/books/content?id=1qceEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
					},
				},
			},
		]);
	});

	test('should add books to an existing list', () => {
		expect(
			books([BOOK_ARRAY[0]], setBooksArray([...BOOK_ARRAY.slice(1)]))
		).toEqual(BOOK_ARRAY);
	});

	test('should return empty books array', () => {
		expect(books([BOOK_ARRAY[0]], resetBooksArray())).toEqual([]);
	});

	test('should set total items', () => {
		expect(totalItems(0, setTotalItems(320))).toBe(320);
	});

	test('should reset total items to 0', () => {
		expect(totalItems(450, resetTotalItems())).toBe(0);
	});

	test('should increment start index', () => {
		expect(startIndex(30, incrementStartIndex())).toBe(60);
	});

	test('should add search value to the state', () => {
		expect(searchValue('', setSearchValue('java script'))).toBe('java script');
	});

	test('should change loading state', () => {
		expect(isLoading(false, setIsLoading(true))).toBe(true);
	});

	test('should set error object', () => {
		expect(
			error(
				{ title: 'dsd', description: 'sgsg' },
				setErrorObject({ title: '404', description: 'Not found' })
			)
		).toEqual({ title: '404', description: 'Not found' });
	});

	test('should reset error object', () => {
		expect(
			error({ title: 'dsd', description: 'sgsg' }, resetErrorObject())
		).toEqual({
			title: '',
			description: '',
		});
	});
});
