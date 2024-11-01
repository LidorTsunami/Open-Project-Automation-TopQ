import { BasePage } from '../BasePage';
import {OrgNamePageLocators} from "./OrgNamePageLocators";

export class OrgNameSignInPage extends BasePage {
    locators = new OrgNamePageLocators()
    async signIn() {
        await this.page.fill(this.locators.SignInInput, "LidorAutomation");
        await this.page.click(this.locators.SignInButton);
    }
}
