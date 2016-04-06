import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(perfume, params) {
      this.sendAction('updateItem', perfume, params);
    },

    delete(perfume) {
      if(confirm("Would you like to permanently delete this item? If so, click OK.")) {
        this.sendAction('destroyPerfume', perfume);
      }
    }
  }
});
