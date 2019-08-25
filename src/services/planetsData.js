// This code should be rewritten as actions,
// requests will be moved to services,
// fetch will be rewritten with axios
import Config from '../config';

export default class PlanetsService {
  static async getPlanets() {
    try {
      const planets = await fetch(Config.api.planets);
      const { count } = await planets.json();
      return count;
    } catch (error) {
      // todo: set notification
      return 0;
    }
  }

  static async getPeople() {
    try {
      const people = await fetch(Config.api.people);
      const { count } = await people.json();
      return count;
    } catch (error) {
      return 0;
    }
  }

  static async getStarShips() {
    try {
      const starShips = await fetch(Config.api.starShips);
      const { count } = await starShips.json();
      return count;
    } catch (error) {
      return 0;
    }
  }
}
