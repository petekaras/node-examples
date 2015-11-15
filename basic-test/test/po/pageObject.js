var googleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  },
    another: function(callTwice) {

    	this.click('selector-1');
      if(callTwice){
        this.click('selector-2');
      }
  
  }
};

module.exports = {
  commands: [googleCommands],
  elements: {
    searchBar: { 
      selector: 'input[type=text]' 
    },
    submit: { 
      selector: '//[@name="q"]', 
      locateStrategy: 'xpath' 
    }
  }
};