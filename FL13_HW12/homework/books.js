let books = [
    {
        'id': '123',
        'name':'fallout',
        'author': 'ivanov',
        'img':'https://www.bookclub.ua/images/db/goods/k/53454_98763_k.jpg',
        'plot': `some text some text some text some text some text some text some text `
    },
    {
        'id': '124',
        'name':'space rangers',
        'author': 'petrov',
        'img':'https://www.bookclub.ua/images/db/goods/k/53471_98145_k.jpg',
        'plot': `some text some text some text some text some text some text some text `
    },
    {
        'id': '125',
        'name':'heroes of might and magic III',
        'author': 'sidorov',
        'img':'https://www.bookclub.ua/images/db/goods/k/35333_52676_k.jpg',
        'plot': `some text some text some text some text some text some text some text `
    }
]

if(!localStorage.getItem('books', JSON.stringify(books))){
localStorage.setItem('books', JSON.stringify(books));
}

// localStorage.setItem('books', JSON.stringify(books));