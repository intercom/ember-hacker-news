import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('frontpage');
  this.route('new');
  this.route('jobs');
  this.route('ask');
  this.route('active');
  this.route('show');
});

export default Router;
