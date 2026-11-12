import {Locator,Page} from "@playwright/test"
 export class loginPage{
    readonly page:Page
    readonly usernames:Locator
    readonly passwords:Locator
    readonly remainderme:Locator
    readonly loginbutton:Locator
    readonly BankLogo:Locator

    // Wrong credential
    readonly alertMessage: Locator


    constructor(page:Page){
        this.page=page;
        this.usernames=page.getByPlaceholder("Enter your username")
        this.passwords=page.getByPlaceholder("Enter your password")
        this.remainderme=page.locator("//button[@id='remember-me']")
        this.loginbutton=page.locator("//button[@id='login-btn']")
        this.BankLogo=page.locator('//span[contains(text(), "SecureBank")]')

        this.alertMessage = page.locator('//div[@id="alert-message"]')

}
}