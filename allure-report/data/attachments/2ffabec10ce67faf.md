# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\feature\addAccounts.feature.spec.js >> addAccounts >> Add a new account and verify the account is created
- Location: .features-gen\src\feature\addAccounts.feature.spec.js:6:7

# Error details

```
Error: Multiple definitions matched scenario step.
Step: Given I go to "https://qaplayground.com/bank" # src\feature\login.feature:5
  - Given 'I go to {string}' # src\steps\addAccount.steps.ts:11
  - Given 'I go to {string}' # src\steps\login.steps.ts:9
```

# Test source

```ts
  1  | // Generated from: src\feature\login.feature
  2  | import { test } from "../../../src/fixture/fixture.ts";
  3  | 
  4  | test.describe('addAccounts', () => {
  5  | 
  6  |   test('Add a new account and verify the account is created', { tag: ['@addAccount'] }, async ({ Given, When, Then, And, appAction, page }) => { 
> 7  |     await Given('I go to "https://qaplayground.com/bank"', null, { page }); 
     |           ^ Error: Multiple definitions matched scenario step.
  8  |     await And('I enter username "admin"', null, { appAction }); 
  9  |     await And('I enter password "admin123"', null, { appAction }); 
  10 |     await When('I click on login button', null, { appAction }); 
  11 |     await Then('user should see homePage', null, { appAction }); 
  12 | 
  13 |     await When('I click on add account button', null,{appAction});
  14 |     await And('I enter accountName "Aditya Birla"', null,{appAction});
  15 |     await When('I click on accountType dropdown', null,{appAction});
  16 |     await When('I select saving dropdown', null,{appAction});
  17 |     await And('I enter initialBalance "15000"', null,{appAction});
  18 |     await When('I check status', null,{appAction});
  19 |     await When('I click on save button', null,{appAction});
  20 |     await Then('I should see account "Aditya Birla" created successfully', null,{appAction});
  21 | 
  22 |   });
  23 | 
  24 | 
  25 | });
  26 | 
  27 | // == technical section ==
  28 | 
  29 | test.use({
  30 |   $test: [({}, use) => use(test), { scope: 'test', box: true }],
  31 |   $uri: [({}, use) => use('src\\feature\\login.feature'), { scope: 'test', box: true }],
  32 |   $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  33 | });
  34 | 
  35 | const bddFileData = [ // bdd-data-start
  36 |   {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I go to \"https://qaplayground.com/bank\"","stepMatchArguments":[{"group":{"start":8,"value":"\"https://qaplayground.com/bank\"","children":[{"start":9,"value":"https://qaplayground.com/bank","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter username \"admin\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin\"","children":[{"start":18,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter password \"admin123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin123\"","children":[{"start":18,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user should see homePage","stepMatchArguments":[]}]},
  37 |   {"pwTestLine":14,"pickleLine":16,"tags":["@login"],"steps":[{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I go to \"https://qaplayground.com/bank\"","stepMatchArguments":[{"group":{"start":8,"value":"\"https://qaplayground.com/bank\"","children":[{"start":9,"value":"https://qaplayground.com/bank","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter username \"admin1\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin1\"","children":[{"start":18,"value":"admin1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter password \"admin321\"","stepMatchArguments":[{"group":{"start":17,"value":"\"admin321\"","children":[{"start":18,"value":"admin321","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then user should see alert message for Invalid username or password","stepMatchArguments":[]}]},
  38 | ]; // bdd-data-end
```