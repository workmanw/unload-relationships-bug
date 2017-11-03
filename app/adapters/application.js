import { resolve } from 'rsvp';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  deleteRecord(store, type, snapshot) {
    let options = snapshot.adapterOptions || {};
    if (options.clientSideDelete) {
      return resolve();
    }

    return this._super(store, type, snapshot);
  }
});
