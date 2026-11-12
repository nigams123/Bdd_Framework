// Generated from: src\feature\login.feature
import { test } from "../../../fixture/fixture.ts";

test.describe('Verify login', () => {

  test('verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, When, Then, And, appAction, page }) => { 
    await Given('I go to "https://qaplayground.com/bank"', null, { page }); 
    await And('I enter username "admin"', null, { appAction }); 
    await And('I enter password "admin123"', null, { appAction }); 
    await When('I click on login button', null, { appAction }); 
    await Then('user should see homePage', null, { appAction }); 
  });

  test('verify alert message is user provide wrong credential', { tag: ['@login'] }, async ({ Given, When, Then, And, appAction, page }) => { 
    await Given('I go to "https://qaplayground.com/bank"', null, { page }); 
    await And('I enter username "admin1"', null, { appAction }); 
    await And('I enter password "admin321"', null, { appAction }); 
    await When('I click on login button', null, { appAction }); 
    await Then('user should see alert message for Invalid username or password', null, { appAction, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I go to \"https://qaplayground.com/bank\"","stepMatchArguments":[{"group":{"start":8,"value":"\"https://qaplayground.com/bank\"","children":[{"start":9,"value":"https://qaplayground.com/bank","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter username \"admin\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin\"","children":[{"start":18,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter password \"admin123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin123\"","children":[{"start":18,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user should see homePage","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":16,"tags":["@login"],"steps":[{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I go to \"https://qaplayground.com/bank\"","stepMatchArguments":[{"group":{"start":8,"value":"\"https://qaplayground.com/bank\"","children":[{"start":9,"value":"https://qaplayground.com/bank","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter username \"admin1\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin1\"","children":[{"start":18,"value":"admin1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter password \"admin321\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin321\"","children":[{"start":18,"value":"admin321","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then user should see alert message for Invalid username or password","stepMatchArguments":[]}]},
]; // bdd-data-end