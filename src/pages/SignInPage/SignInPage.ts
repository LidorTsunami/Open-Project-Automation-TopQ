import { Page } from 'playwright';
import { HomePage } from "../HomePage/HomePage";

export class SignInPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterCredentials(username: string, password: string) {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
    }

    async submitLogin(): Promise<HomePage> {
        await this.page.click("//*[@id='login-form']/form/div[3]/input");
        return new HomePage(this.page);
    }
}