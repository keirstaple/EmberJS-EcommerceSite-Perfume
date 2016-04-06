import Ember from 'ember';

export default Ember.Component.extend({
  shoppingBag: Ember.inject.service(),

  actions: {
    addToCart(perfume) {
      console.log(perfume);
      this.get('shoppingBag').add(perfume);
    }
  }
});
