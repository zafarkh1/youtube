import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();
// const apiKey = "99d533121bmsh65cf63590a42244p1722a9jsnc9ab7abec56f";

export const Appcontext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

	const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
