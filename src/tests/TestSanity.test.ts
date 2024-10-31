
import {expect} from "@playwright/test";
import {PageFactory} from "../pages/PageFactory";
import {test} from "../utils/fixtures"

test('sign in to org', async ({newPage}) => {
    const pageFactory = new PageFactory(newPage);
    const orgNameSignInPage = pageFactory.createOrgNameSignInPage();
    const signInPage = pageFactory.createSignInPage();
    const homePage = pageFactory.createHomePage();
    const workspacePage = pageFactory.createWorkspacePage();
    await orgNameSignInPage.goto("https://www.openproject.org/signin/");
    await orgNameSignInPage.signIn("LidorAutomation");
    await signInPage.signIn("Lidor280006@gmail.com", "L123456789");
    await homePage.openProjects();
    await homePage.selectProject();
    await workspacePage.createTask("Another Awesome Task");
    await workspacePage.filterTask("Another Awesome Task");
    const taskText = await workspacePage.getTaskText("41");
    expect(taskText).toBe("Another Awesome Task");
});