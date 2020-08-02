import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/CollectionsOverview';

import CollectionPageContainer from '../CollectionPage';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
