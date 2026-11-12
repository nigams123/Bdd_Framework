import {expect, Page} from "@playwright/test"
import { createBdd } from 'playwright-bdd'; 
import {test} from "../fixture/fixture"


const { Given, When, Then } = createBdd(test);


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

Then('user should see homePage', async ({appAction}) => {
    await expect(appAction.login.BankLogo).toBeVisible();
});

Then('user should see alert message for Invalid username or password',async ({ appAction,page }) => {
    await expect(appAction.login.alertMessage).toBeVisible();
    }
);
