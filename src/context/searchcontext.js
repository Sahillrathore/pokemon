import { createContext, useContext } from "react";

const search = createContext();

export const Searchprovider = search.Provider;

export const useSearch = () => {
    return useContext(search);
}