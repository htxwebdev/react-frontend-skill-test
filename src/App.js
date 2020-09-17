import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRecipesApi } from './redux/recipe/recipe.actions';
import { fetchSpecialsApi } from './redux/special/special.actions';

import CardList from './components/card-list/card-list';
import SpecialsList from './components/specials-list/specials-list';
import Detail from './components/detail/detail';

import './App.scss';

const App = (props) => {
  useEffect(() => {
    const { fetchRecipesApi, fetchSpecialsApi } = props;
    fetchRecipesApi();
    fetchSpecialsApi();
  }, [])

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Recipe App</a>
        <nav>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/" href="#" className="nav-link">Recipes</Link></li>
            <li className="nav-item"><Link to="/specials" href="#" className="nav-link">Specials</Link></li>
          </ul>
        </nav>
      </nav>
      <div className="main-container">
        <Switch>
          <Route exact={true} path="/" component={CardList} />
          <Route path="/specials" component={SpecialsList} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  fetchRecipesApi: () => dispatch(fetchRecipesApi()),
  fetchSpecialsApi: () => dispatch(fetchSpecialsApi())
})

export default connect(null, mapDispatchToProps)(App);
