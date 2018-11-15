export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
<<<<<<< HEAD
      const band = { id: Math.random(), name: action.name }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };
=======
    const band = { id: Math.random(), name: action.name }
      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return {bands };

>>>>>>> bf97ce56b7b0ddf15de30a76547f963f40375b8d
    default:
      return state;
  }
};
