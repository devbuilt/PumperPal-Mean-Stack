'use strict';

describe('Component: MapComponent', function () {

  // load the controller's module
  beforeEach(module('pumperpalApp'));

  var MapComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MapComponent = $componentController('MapComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
