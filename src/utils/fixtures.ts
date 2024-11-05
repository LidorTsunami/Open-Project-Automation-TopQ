import { BrowserContext, chromium, Page, test as base } from '@playwright/test';
import { Browser } from 'playwright';
import { WorkspacePage } from "../pages/WorkSpace/WorkspacePage";
import { OrgSignInPage } from "../pages/OrgNameSignIn/OrgNameSignInPage";

export const test = base.extend<{
    newPage: Page;
    workspacePage: WorkspacePage;
}>({
    newPage: async ({}, use) => {
        const browser: Browser = await chromium.launch({ headless: false });
        const context: BrowserContext = await browser.newContext();
        const page: Page = await context.newPage();
        await use(page);
        await page.waitForTimeout(2000);
        const workspacePage = new WorkspacePage(page);
        try {
            await workspacePage.deleteTask();
        } catch (error) {
            console.log('No task to delete or deletion failed');
        }
        await page.close();
        await context.close();
        await browser.close();
    },

    workspacePage: async ({ newPage }, use) => {
        const orgSignInPage = new OrgSignInPage(newPage);
        await orgSignInPage.goTo();
        await orgSignInPage.enterOrganizationName("LidorAutomation");
        const signInPage = await orgSignInPage.submitOrganizationLogin();
        await signInPage.enterCredentials("lidor280006@gmail.com", "L123456789");
        const homePage = await signInPage.submitLogin();
        const navigatorPage = await homePage.openDemoProject();
        const workspacePage = await navigatorPage.enterWorkSpaces();
        await use(workspacePage);
    },
});