'use strict';

describe('MessagesStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/MessagesStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
