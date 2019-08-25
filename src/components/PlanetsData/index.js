import React, { Fragment } from 'react';

import useAsyncPlanetsData from '../../hooks/useAsyncPlanetsData';
import ActivityIndicator from '../ActivityIndicator';

import './style.css';

// TASK: refactor this
const PlanetsData = () => {
  const {
    isLoaded,
    planets,
    people,
    starShips,
  } = useAsyncPlanetsData();

  return (
    <div className="planets-data">
      {(isLoaded)
        ? (
          <Fragment>
            <h1>There are {planets} planets. Planets are so big!</h1>
            <small>
              There are {people} people. And yes they are small.
            </small>
            <h4>{starShips} starships can be found in the galaxy.</h4>
          </Fragment>
        )
        : <ActivityIndicator isLoading={true}/>
      }
    </div>
  );
};

export default PlanetsData;
