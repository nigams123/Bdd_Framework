import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { loginPage } from '../page/loginPage';
import {accountPage} from '../page/addAccountPage';
 
type AppActions = {
  login: loginPage;
  addAccounts : accountPage
};
 
type Fixtures = {
  appAction: AppActions;
};
 
export const test = base.extend<Fixtures>({
  appAction: async ({ page }, use) => {
    await use({
      login: new loginPage(page),
      addAccounts: new accountPage(page),
    });
  },
});
 
export { expect };
 