import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(perfume) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        size: this.get('size'),
        description: this.get('description'),
        image: this.get('image'),
        details: this.get('details')
      };
      this.sendAction('updateItem', perfume, params);
    }
  }
});
