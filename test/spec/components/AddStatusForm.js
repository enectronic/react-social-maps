'use strict';

describe('AddStatusForm', function () {
  var React = require('react/addons');
  var AddStatusForm, component;

  beforeEach(function () {
    AddStatusForm = require('components/AddStatusForm.js');
    component = React.createElement(AddStatusForm);
  });

  it('should create a new instance of AddStatusForm', function () {
    expect(component).toBeDefined();
  });
});
