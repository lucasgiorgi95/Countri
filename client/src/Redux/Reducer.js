import {
  CLEAN_COUNTRY_DETAILS,
  DELETE_ACTIVITY,
  FILTER_BY_ACTIVITIY,
  FILTER_BY_CONTINENT,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRY_NAME,
  ORDER_BY_AZ,
  ORDER_BY_POPULATION,
  POST_ACTIVITY,
} from "../Redux/Actions";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  details: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        
      };
    }
    case GET_ALL_ACTIVITIES: {
      return {
        ...state,
        activities: action.payload,
        allActivities:action.payload
      };
    }

    case GET_COUNTRY_NAME: {
      return {
        ...state,
        countries: action.payload,
      };
    }

    case POST_ACTIVITY: {
      return {
        ...state,
      };
    }
    case FILTER_BY_CONTINENT: {
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continents === action.payload);
      return {
        ...state,
        countries: continentFilter,
      };
    }

    case FILTER_BY_ACTIVITIY: {
      const countriesWithActivities = state.allCountries.filter(
        (country) => country.activities.length > 0
      );
      console.log("paises con actividades", countriesWithActivities);
      let countriesSelected = [];
      countriesWithActivities.forEach((country) => {
        country.activities.forEach((activity) => {
          if (activity.name === action.payload) countriesSelected.push(country);
        });
      });
      const countriesFiltered =
        action.payload === "All"
          ? state.allCountries
          : countriesSelected
      console.log(countriesFiltered);
      return {
        ...state,
        countries: countriesFiltered,
      };
    }

    case ORDER_BY_POPULATION: {
      let sortedCountries;
      if (action.payload === "desc") {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.population > b.population) {
            //si a es mayor, lo pone dsps de b
            return 1;
          }
          if (b.population > a.population) {
            //si a es menor, lo pone antes de b
            return -1;
          }
          return 0; //si son iguales los deja como esta.
        });
      } else {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.population > b.population) {
            
            return -1;
          }
          if (b.population > a.population) {
            
            return 1;
          }
          return 0; 
        });
      }
      return {
        ...state,
        countries: sortedCountries,
      };
    }

    case ORDER_BY_AZ: {
      let sortedCountries;
      if (action.payload === "asc") {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.name > b.name) {
            //si a es mayor, lo pone dsps de b
            return 1;
          }
          if (b.name > a.name) {
            //si a es menor, lo pone antes de b
            return -1;
          }
          return 0; //si son iguales los deja como esta.
        });
      } else {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.name > b.name) {
           
            return -1;
          }
          if (b.name > a.name) {
            
            return 1;
          }
          return 0; 
        });
      }

      return {
        ...state,
        countries: sortedCountries,
      };
    }

    case GET_COUNTRY_DETAILS: {
      return {
        ...state,
        details: action.payload,
      };
    }

    case CLEAN_COUNTRY_DETAILS: {
      return {
        ...state,
        details: [],
      };
    }

    case DELETE_ACTIVITY:{
      let deleted = state.allCountries.filter(e => e.id !== action.payload)
      return {
          ...state,
          allCountries: deleted
      }
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
