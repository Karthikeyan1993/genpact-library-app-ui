interface Column {
  prop: string;
  displayName: string;
  width?: number;
}

interface Library {
  id: number;
  name: string;
  location: string;
  isOpened: string;
}

interface Book {
  id: number;
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  pages: number;
}

export { Column, Library, Book };
