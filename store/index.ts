import {createContext, useContext} from 'react';

import {Store} from './Store';

const store = new Store();

export const StoreContext = createContext(store);

export const useStore = (): Store => useContext(StoreContext);

export default store;
