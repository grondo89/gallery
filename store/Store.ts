// import AsyncStorage from '@react-native-community/async-storage';
import {observable} from 'mobx';
// import {create} from 'mobx-persist';
// import {actionAsync, task} from 'mobx-utils';

import {PhotoStore} from './PhotoStore';

// const hydrate = create({storage: AsyncStorage, jsonify: true});

export class Store {
  photoStore = new PhotoStore();

  initialized = false;

  /**
   * Actions
   */

  //   @actionAsync
  //   async init(): Promise<void> {
  //     try {
  //       await task(this.hydrateStores());

  //       // Initial store setup and data fetching
  //       await task(this.appStore.init());
  //       await task(this.authStore.init());

  //       // Not necessary to wait for promises to be fulfilled
  //       this.featureStore.init();
  //       this.remoteConfigStore.init();
  //       this.paymentStore.init();
  //     } catch (err) {
  //       // TODO: Log error on Firebase
  //     } finally {
  //       this.initialized = true;
  //     }
  //   }

  //   @actionAsync
  //   async hydrateStores(): Promise<void> {
  //     try {
  //       await task(
  //         Promise.all([
  //           hydrate('auth-store', this.authStore),
  //           hydrate('card-store', this.cardStore),
  //           hydrate('geolocation-store', this.geolocationStore),
  //           hydrate('profile-store', this.profileStore),
  //           hydrate('rate-app-store', this.rateAppStore),
  //           hydrate('tooltip-store', this.tooltipStore),
  //         ]),
  //       );
  //     } catch (err) {
  //       // TODO: Log error on Firebase
  //       // eslint-disable-next-line no-console
  //       console.warn('Store hydration error', err);
  //     }
  //   }
}

export const typeStore = typeof Store;
