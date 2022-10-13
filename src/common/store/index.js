import { configureStore, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     allIds: [],
//     byIds: {}
//   };

const TSSlice = createSlice({
  name: 'topSeller',
  initialState: {
    sellers: [],
  },
  reducers: {
    setSellers(state, action) {
      state.sellers = action.payload.sort((a, b) => {
        return b.price - a.price;
      });
    },
  },
});

export const fetchTSData = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://62ceb596826a88972d016070.mockapi.io/sellers'
    );
    const data = await response.json();
    dispatch(TSSlice.actions.setSellers(data));
  } catch (error) {
    console.log(error, 'error');
    throw new Error(error);
  }
};

const HBSlice = createSlice({
  name: 'hotBids',
  initialState: {
    bids: [],
  },
  reducers: {
    setBids(state, action) {
      state.bids = action.payload;
    },
  },
});

export const fetchHBData = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://62ceb596826a88972d016070.mockapi.io/bids'
    );
    const data = await response.json();
    dispatch(HBSlice.actions.setBids(data));
  } catch (error) {
    console.log(error, 'error');
    throw new Error(error);
  }
};

const store = configureStore({
  reducer: {
    topSeller: TSSlice.reducer,
    hotBids: HBSlice.reducer,
  },
});

export default store;
