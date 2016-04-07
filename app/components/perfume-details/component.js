import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment(params) {
      this.sendAction('addComment', params);
    },
    sendRating(params) {
    this.sendAction('sendRating', params);
    }
  }
});
