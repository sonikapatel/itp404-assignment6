import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', {path: ':id'}, function() {
      this.route('artist');
    });
    this.route('new');
    
  });
});

export default Router;
