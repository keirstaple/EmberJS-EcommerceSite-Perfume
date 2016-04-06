import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        title: this.get('title'),
        name: this.get('name'),
        date: moment().format('LLL'),
        body: this.get('body'),
        perfume: this.get('perfume')
      };
      this.sendAction('addComment', params);
    }
  }
});
