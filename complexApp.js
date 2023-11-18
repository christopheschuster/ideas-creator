Filename: complexApp.js

```
// Complex Application: Data Visualization Dashboard

// Importing necessary libraries
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Importing custom components
import App from './components/App';
import rootReducer from './reducers';

// Defining initial state
const initialState = {
  data: [],
  filters: { region: '', category: '', date: '' },
  chartOptions: { type: 'line', color: 'blue' },
  isLoading: false
};

// Creating the Redux store
const store = createStore(rootReducer, initialState);

// Rendering the application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Action Types
const FETCH_DATA = 'FETCH_DATA';
const UPDATE_FILTERS = 'UPDATE_FILTERS';
const UPDATE_CHART_OPTIONS = 'UPDATE_CHART_OPTIONS';
const SET_LOADING = 'SET_LOADING';

// Action Creators
const fetchDataAction = () => {
  return { type: FETCH_DATA };
};

const updateFiltersAction = (filters) => {
  return { type: UPDATE_FILTERS, payload: filters };
};

const updateChartOptionsAction = (options) => {
  return { type: UPDATE_CHART_OPTIONS, payload: options };
};

const setLoadingAction = (isLoading) => {
  return { type: SET_LOADING, payload: isLoading };
};

// Reducers
const dataReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case FETCH_DATA:
      // Fetch data from API and update state accordingly
      return state;
    default:
      return state;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const chartOptionsReducer = (state = initialState.chartOptions, action) => {
  switch (action.type) {
    case UPDATE_CHART_OPTIONS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const loadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  data: dataReducer,
  filters: filtersReducer,
  chartOptions: chartOptionsReducer,
  isLoading: loadingReducer
});

// Custom React Component
class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, filters, chartOptions, isLoading, updateFilters, updateChartOptions } = this.props;

    return (
      <div>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Filters filters={filters} updateFilters={updateFilters} />
            <Chart data={data} chartOptions={chartOptions} />
          </>
        )}
        <Footer />
      </div>
    );
  }
}

// Wrapping the component with Redux functionality
const mapStateToProps = (state) => {
  return {
    data: state.data,
    filters: state.filters,
    chartOptions: state.chartOptions,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchDataAction()),
    updateFilters: (filters) => dispatch(updateFiltersAction(filters)),
    updateChartOptions: (options) => dispatch(updateChartOptionsAction(options))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Happy coding!