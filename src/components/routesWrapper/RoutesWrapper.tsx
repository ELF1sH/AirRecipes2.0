import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../header/HeaderProvider';
import ContentContainer from '../containers/contentContainer/ContentContainerProvider';
import RecipesListProvider from '../recipesList/RecipesListProvider';
import RecipeProvider from '../recipe/RecipeProvider';
import ErrorPage from '../errorHandlingComponents/errorPage/ErrorPageController';

const RoutesWrapper = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <>
          <Header isFixed={false} />
          <ContentContainer>
            <RecipesListProvider />
          </ContentContainer>
        </>
      )}
    />

    <Route
      path="recipe/:recipeId"
      element={(
        <>
          <Header isFixed />
          <ContentContainer>
            <RecipeProvider />
          </ContentContainer>
        </>
      )}
    />

    <Route
      path="*"
      element={(
        <ErrorPage />
      )}
    />
  </Routes>
);

export default RoutesWrapper;
