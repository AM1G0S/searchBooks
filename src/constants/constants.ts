import { Book } from './interfaces';

export const API_KEY = 'AIzaSyAwmoNcoRmL5Ziiy43ZGrNtQripDMEgIE8';
export const ITEMS_PER_PAGE = '30';
export const INITIAL_STATE = {
  searchValue: '',
  searchResult: [] as Book[],
  totalItems: 0,
  selectedBook: null,
  error: { title: '', description: '' },
};

export const BOOK_ARRAY = [
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
  {
    id: 'c2E3DLu947sC',
    volumeInfo: {
      title: 'Язык программирования Java и среда NetBeans. 2 изд. (+ дистрибутив)',
      authors: ['Монахов Вадим Валериевич'],
      description:
        'Книга написана на базе курса лекций, читаемых автором на кафедре вычислительной физики Санкт-Петербургского государственного университета. Второе издание ориентировано на использование среды NetBeans 6.5 и дополнено новыми материалами. Изложены основные синтаксические конструкции Java, принципы объектно-ориентированного программирования, особенности проведения численных расчетов. Приводятся сведения о разработке основных категорий программного обеспечения Java (ME, SE и EE). Рассказывается о создании сетевых приложений и приложений для мобильных устройств. Разбираются методики написания многопоточных приложений Java для систем с многоядерными процессорами. Материал сопровождается большим количеством примеров с подробным анализом их исходных кодов. На компакт-диске находятся дистрибутивы JDK 6u11 и NetBeans 6.5 для Windows и Linux, а также исходные тексты примеров Файлы для книги можно скачать по ссылке ftp://ftp.bhv.ru/9785977504249.zip',
      categories: ['Computers'],
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=c2E3DLu947sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=c2E3DLu947sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
    },
  },
  {
    id: 'OM1SEAAAQBAJ',
    volumeInfo: {
      title: 'MATLAB. Программирование на С++, С#, Java и VBA',
      authors: ['Николай Смоленцев'],
      description:
        'Всех, кто работал с системой MATLAB, поражает удивительная легкость написания программ на языке MATLAB для решения самых разнообразных задач. MATLAB предлагает классы, которые представляют основные типы данных MATLAB в других языках программирования: С/С++, Java, VBA, .NET. В системе имеется также возможность создания компонентов для этих языков, которые включают функции, написанные в MATLAB.Изложению этой тематики посвящена данная книга. В ней подробно рассматривается работа Компилятора MATLAB, примеры создания независимых от MATLAB приложений на C++, Java, C#, VBA. Кроме того рассмотрена работа с MATLAB Production Server, что позволяет исполнять трудоемкие процедуры MATLAB на сервере MATLAB.Освоение технологии использования колоссальных математических возможностей MATLAB в других языках программирования позволит создавать полноценные приложения с развитой графической средой для реализации сложных математических алгоритмов.Издание предназначено студентам и преподавателям вузов по математическим специальностям, а также программистам, которые сталкиваются с проблемами реализации математических алгоритмов на MATLAB.',
      categories: ['Mathematics'],
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=OM1SEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=OM1SEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
    },
  },
];
