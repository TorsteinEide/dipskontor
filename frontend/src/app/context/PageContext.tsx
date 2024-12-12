
import { createContext } from 'react';

const PageContext = createContext({
  currentPage: "",
  setCurrentPage: (page: string) => {}
});

export default PageContext;
