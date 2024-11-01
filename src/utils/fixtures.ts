import { BrowserContext, chromium, Page, test as base } from '@playwright/test';
import { Browser } from 'playwright';
import {WorkspacePage} from "../pages/WorkSpace/WorkspacePage";
import {PageHolder} from "../pages/PagesHolder";

export const test = base.extend<{
    newPage: Page;
    pageHolder: PageHolder;
}>({
    newPage: async ({}, use) => {
        const browser: Browser = await chromium.launch({ headless: false });
        const context: BrowserContext = await browser.newContext();
        const page: Page = await context.newPage();
        await use(page);
        const workspacePage = new WorkspacePage(page);
        await workspacePage.deleteFilteredTask();
        await page.close();
        await context.close();
        await browser.close();
    },
    pageHolder: async ({newPage}, use) => {
        const pageHolder = new PageHolder(newPage);
        await use(pageHolder)
    },

});