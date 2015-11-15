/**
* Test a Nightwatch page object command mocking out interactions with the client.
*/
var nw = require('nightwatch');	
var sinon = require('sinon');
var assert = require('assert');

var options = require('./nightwatch.json');
var client;
var po;


    describe('Page Object tests: ', function() {
    	beforeEach(function() {
      			client = nw.client(options);
      			po = client.api.page.pageObject();
  		});
		    it('with 1 call', function () {
		    	
		    	var clickSpyFunction = sinon.spy(po,"click");
		    	
		    	po.another(false);
		    	
		    	assert.equal(true,clickSpyFunction.withArgs('selector-1').calledOnce);
		    	
			});
		    it('with 2 calls', function () {

		    	var clickSpyFunction = sinon.spy(po,"click");
		  
		    	po.another(true);
		    	
		    	assert.equal(true,clickSpyFunction.withArgs('selector-1').calledOnce);
		    	assert.equal(true,clickSpyFunction.withArgs('selector-2').calledOnce);
						
		});
	});	


