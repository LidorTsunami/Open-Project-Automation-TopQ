import {expect} from "@playwright/test";
import {test} from "../utils/fixtures"

test('Add new Task and Filter it', async ({pageHolder}) => {
    await pageHolder.orgNameSignInPage.goToOrgSignInPage();
    await pageHolder.orgNameSignInPage.signIn();
    await pageHolder.signInPage.signIn();
    await pageHolder.homePage.openProjects();
    await pageHolder.homePage.selectProjectDemo();
    await pageHolder.navigationPage.enterWorkSpaces()
    await pageHolder.workspacePage.enterTaskMaker();
    await pageHolder.workspacePage.taskMakerPage.addTask("Another Awesome Task");
    await pageHolder.workspacePage.openFilterPage()
    await pageHolder.workspacePage.filterPage.filterTask("Another Awesome Task")
    const taskText: string | null = await pageHolder.workspacePage.taskMakerPage.getTaskText();
    expect(taskText).toBe("Another Awesome Task");
});
