import { Before, After } from "@cucumber/cucumber";
import {test} from "../fixture/fixture"
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

Before(async function ({} )  {

    Given('I go to {string}', async ({page }, url) => {
    await page.goto(url);
});

Given('I enter username {string}', async ({appAction}, username) => {
    await appAction.login.usernames.fill(username);
});

Given('I enter password {string}', async ({appAction}, password) => {
    await appAction.login.passwords.fill(password);
});

When('I click on login button', async ({appAction}) => {
    await appAction.login.loginbutton.click();
});


});


After(async function () {

    console.log("Scenario is completed");
});