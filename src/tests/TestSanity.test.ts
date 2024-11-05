import { expect } from '@playwright/test';
import {test} from '../utils/fixtures'

test('Add new Task and Filter it', async ({ workspacePage }) => {
    await workspacePage.taskMakerPage.openNewTask();
    await workspacePage.taskMakerPage.fillTaskSubject("Another Awesome Task");
    await workspacePage.taskMakerPage.saveTask();
    await workspacePage.filterMenuPage.openFilter();
    await workspacePage.filterMenuPage.filterByText("Another Awesome Task");
    const taskText = await workspacePage.filterMenuPage.getTaskText();
    expect(taskText).toBe("Another Awesome Task");
});
