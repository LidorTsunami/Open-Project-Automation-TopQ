import { BasePage } from '../BasePage';
import {SignInLocators} from "./SignInLocators";

export class SignInPage extends BasePage {
    locators = new SignInLocators()
    async signIn() {
        await this.page.fill(this.locators.usernameField, "lidor280006@gmail.com");
        await this.page.fill(this.locators.passwordField, "L123456789");
        await this.page.click(this.locators.signInButton);
    }
}