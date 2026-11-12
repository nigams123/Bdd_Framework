// Generated from: src\feature\addAccount.feature
import { test } from "../../../fixture/fixture.ts";

test.describe('addAccounts', () => {

  test('Add a new account and verify the account is created', { tag: ['@addAccount'] }, async ({ Given, When, Then, And, appAction, page }) => { 
    await Given('I go to "https://qaplayground.com/bank"', null, { page }); 
    await And('I enter username "admin"', null, { appAction }); 
    await And('I enter password "admin123"', null, { appAction }); 
    await When('I click on login button', null, { appAction }); 
    await And('I click on add account button', null, { appAction }); 
    await And('I enter accountName "Aditya Birla"', null, { appAction }); 
    await And('I click on accountType dropdown', null, { appAction }); 
    await And('I select saving dropdown', null, { appAction }); 
    await And('I enter initialBalance "15000"', null, { appAction }); 
    await And('I check status', null, { appAction }); 
    await And('I click on save button', null, { appAction }); 
    await Then('I should see account created successfully', null, { appAction }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\feature\\addAccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@addAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I go to \"https://qaplayground.com/bank\"","stepMatchArguments":[{"group":{"start":8,"value":"\"https://qaplayground.com/bank\"","children":[{"start":9,"value":"https://qaplayground.com/bank","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter username \"admin\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin\"","children":[{"start":18,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter password \"admin123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin123\"","children":[{"start":18,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click on add account button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I enter accountName \"Aditya Birla\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Aditya Birla\"","children":[{"start":21,"value":"Aditya Birla","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click on accountType dropdown","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I select saving dropdown","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I enter initialBalance \"15000\"","stepMatchArguments":[{"group":{"start":23,"value":"\"15000\"","children":[{"start":24,"value":"15000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I check status","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I click on save button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see account created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end