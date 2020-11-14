import {

    firestore,
    convertCollectionsSnapshotToMap

} from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
  
export const fetchCollectionsStart = () => ({

    type: ShopActionTypes.FETCH_COLLECTIONS_START

});
  
export const fetchCollectionsSuccess = collectionsMap => ({

    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap

});
  
export const fetchCollectionsFailure = errorMessage => ({

    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage

});
  
export const fetchCollectionsStartAsync = () => {
    return dispatch => {

        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
    
        collectionRef
            .get()

            .then(snapshot => {

                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));

            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));

    };
};

/*
    componentDidMount() {
        const { 1 } = this.props;
        const 2 = firestore.collection('collections');

        fetch(
            'https://firestore.googleapis.com/...'
        )
        .then(response => response.json())
        .then(collections => console.log(collections));
    }
    collectionRef.get
*/



