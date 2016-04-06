import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    saveUser(params) {
      var _this = this;
      var ref = new Firebase('https://perfuma.firebaseio.com');
      ref.createUser({
        email: params.email,
        password: params.password
      }, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              alert("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              alert("The specified email is not a valid email.");
              break;
            default:
              alert("Error creating user:", error);
            }
          } else {

            var newUser = _this.store.createRecord('user', {id: userData.uid, email: params.email});
            newUser.save();
            alert("Thanks, you're all signed up! Press OK to begin shopping.");
            _this.transitionTo('index');
          }
      });
    }
  }
});
