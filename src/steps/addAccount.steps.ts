import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixture/fixture";

const { Given, When, Then } = createBdd(test);

When('I click on add account button', async ({ appAction }) => {

    await appAction.addAccounts.addAccount.click();
});

Given('I enter accountName {string}', async ({ appAction }, accountName) => {

    await appAction.addAccounts.accountName.fill(accountName);
});

When('I click on accountType dropdown', async ({ appAction }) => {

    await appAction.addAccounts.accountTypeDropDownClick.click();
});

When('I select saving dropdown', async ({ appAction }) => {

    await appAction.addAccounts.selectDropDown.click();
});

Given('I enter initialBalance {string}', async ({ appAction }, initialBalance) => {

    await appAction.addAccounts.initialBalance.fill(initialBalance);
});

When('I check status', async ({ appAction }) => {

    await appAction.addAccounts.statusCheckBox.check();
});

When('I click on save button', async ({ appAction }) => {

    await appAction.addAccounts.saveAccountButton.click();
});

Then('I should see account created successfully', async ({ appAction }) => {
    await appAction.addAccounts.page.waitForTimeout(3000);
    await expect(appAction.addAccounts.accountVerify).toBeVisible();
 
});