import { Page } from 'playwright';
import { SignInPage } from '../SignInPage/SignInPage';

export class OrgSignInPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto("https://www.openproject.org/signin/");
    }

    async enterOrganizationName(orgName: string) {
        await this.page.fill("#signin-input", orgName);
    }

    async submitOrganizationLogin(): Promise<SignInPage> {
        await this.page.click("//*[@id='signin']/input");
        return new SignInPage(this.page);
    }
}