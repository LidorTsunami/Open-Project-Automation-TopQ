import { BrowserContext, chromium, Page, test as base } from '@playwright/test';
import { Browser } from 'playwright';
import {PageFactory} from "../pages/PageFactory";

export const test = base.extend<{
    newPage: Page;
    orgSignInPage: Page;
}>({
    newPage: async ({}, use) => {
        const browser: Browser = await chromium.launch({ headless: false });
        const context: BrowserContext = await browser.newContext();
        const page: Page = await context.newPage();
        await use(page);
        await page.close();
        await context.close();
        await browser.close();
    },
    orgSignInPage: async ({ newPage }, use) => {
    const pageFactory = new PageFactory(newPage);
    const orgNameSignInPage = pageFactory.createOrgNameSignInPage();
    const signInPage = pageFactory.createSignInPage();

    }
});