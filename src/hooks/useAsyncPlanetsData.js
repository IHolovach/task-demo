import { useState, useEffect } from 'react';

import PlanetsService from '../services/planetsData';

export default function useAsyncPlanetsData() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [starShips, setStarShips] = useState([]);

  async function fetchPlanets() {
    const planets = await PlanetsService.getPlanets();
    setPlanets(planets);
  }

  async function fetchPeople() {
    const people = await PlanetsService.getPeople();
    setPeople(people);
  }

  async function fetchStarShips() {
    const starShips = await PlanetsService.getStarShips();
    setStarShips(starShips);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchPlanets();
    fetchPeople();
    fetchStarShips();
  }, []);

  return {
    isLoaded,
    planets,
    people,
    starShips,
  };
}
