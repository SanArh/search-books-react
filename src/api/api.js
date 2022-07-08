import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
    // headers: {key: 'AIzaSyDDzSeClJU-xwYRtuZHXCg4YbEiy7-AJe8'}
});


export const searchBooks = (searchingText, category, orderBy, startIndex) => {
    if(category === 'all') {
        return instance.get(`?q=${searchingText}&startIndex=${startIndex}&orderBy=${orderBy}&maxResults=30&key=AIzaSyDDzSeClJU-xwYRtuZHXCg4YbEiy7-AJe8`);
    }
    return instance.get(`?q=${searchingText}+subject:${category}&startIndex=${startIndex}&orderBy=${orderBy}&maxResults=30&key=AIzaSyDDzSeClJU-xwYRtuZHXCg4YbEiy7-AJe8`);
}

export const findBook = (bookId) => instance.get(`/${bookId}?key=AIzaSyDDzSeClJU-xwYRtuZHXCg4YbEiy7-AJe8`);
