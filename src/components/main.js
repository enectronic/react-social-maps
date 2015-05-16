'use strict';

var FluxSocialMapsApp = require('./FluxSocialMapsApp');
var SocialMapsView = require('./SocialMapsView');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={FluxSocialMapsApp}>
    <Route name="/" handler={SocialMapsView}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
