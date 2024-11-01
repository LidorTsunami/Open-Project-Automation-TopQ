import { Page } from 'playwright';

export class BasePage {
    protected page: Page;
    readonly url = "https://www.openproject.org/signin/"

    constructor(page: Page) {
        this.page = page;
    }

    async goToOrgSignInPage() {
        await this.page.goto(this.url);
    }
}