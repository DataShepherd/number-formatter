'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
  it('should convert single digits', function() {
    var res = numFormatter(1);
    expect(res).to.equal('1');
  });

  it('should convert double digits', function() {
    var res = numFormatter(12);
    expect(res).to.equal('12');
  });

  it('should convert triple digits', function() {
    var res = numFormatter(123);
    expect(res).to.equal('123');
  });

  it('should convert four digits', function() {
    var res = numFormatter(1234);
    expect(res).to.equal('1,234');
  });

  it('should convert 5 digits', function() {
    var res = numFormatter(12345);
    expect(res).to.equal('12,345');
  });

  it('should convert 6 digits', function() {
    var res = numFormatter(123456);
    expect(res).to.equal('123,456');
  });

  it('should convert 7 digits', function() {
    var res = numFormatter(1234567);
    expect(res).to.equal('1,234,567');
  });

  it('should convert 8 digits', function() {
    var res = numFormatter(12345678);
    expect(res).to.equal('12,345,678');
  });

});

