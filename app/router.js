import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('perfume', {path: '/perfume/:perfume_id'});
  this.route('cart');
  this.route('login');
  this.route('signup');
  this.route('user', {path: '/user/:user_id'});

  this.authenticatedRoute('protected', function() {
    this.route('new');
  });
});

export default Router;
