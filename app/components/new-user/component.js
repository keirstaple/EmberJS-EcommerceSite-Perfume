import Ember from 'ember';

export default Ember.Component.extend({
  actions:  {
    saveUser() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('saveUser', params);  
    }
  }
});
