import { BasePage } from './BasePage';

export class SignInPage extends BasePage {
    async signIn(username: string, password: string) {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
        await this.page.click("//*[@id='login-form']/form/div[3]/input");
    }
}