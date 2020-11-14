import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import Spinning from '../with-spinner/with-spinner.component';

import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({

  isLoading: selectIsCollectionFetching

});

// evaluate from right to left 
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinning
)(CollectionsOverview);

export default CollectionsOverviewContainer;
