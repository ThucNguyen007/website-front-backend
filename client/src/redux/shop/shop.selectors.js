import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = 
  createSelector(

    [selectShop],
    shop => shop.collections
    
  );

export const selectCollectionsForPreview = 
  createSelector(

    [selectCollections],
    collections => 
      collections ? Object.keys(collections).map(key => collections[key]) : []

  );

// memoize does the same idea of meoization as reselect does for our selectors
// except this time memoizing the return of our function which returns our selectors.
// if this memoize() gets called again, don't rerun this func, so just return 
// the selector that has been stored.
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(

    [selectCollections],
    collections => (collections ? collections[collectionUrlParam]: null)

  )
);

  export const selectIsCollectionFetching = 
    createSelector(

      [selectShop],
      shop => shop.isFetching

    );
  
  export const selectIsCollectionsLoaded = 
    createSelector(

      [selectShop],
      shop => !!shop.collections

    );

