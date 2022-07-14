import { createContext, useContext, useState } from 'react';

export enum Page {
    Pessoa = 'Estudantes',
}

type ContextType = {
    page: Page;
    setPage: (page: Page) => void;
}

const Context = createContext<ContextType>({
    page: Page.Pessoa,
    setPage: (page: Page) => console.warn('Sem pagina'),
});

export const usePage = () => useContext(Context);

export const PageStore: React.FC = ({ children }) => {
    const [page, setPage] = useState(Page.Pessoa);
    return (
        <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
    );
};