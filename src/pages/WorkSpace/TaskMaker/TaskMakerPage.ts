import { BasePage } from '../../BasePage';
import { Page } from "@playwright/test";
import {TaskMakerLocators} from "./TaskMakerLocators";

export class TaskMakerPage extends BasePage {
    locators = new TaskMakerLocators()
    constructor(page: Page) {
        super(page);
    }

    async addTask(taskName: string) {
        await this.page.fill(this.locators.taskNameInput, taskName);
        await this.page.click(this.locators.saveButton);
    }

    async getTaskText() {
        return this.page.locator(this.locators.resultsContainer).getAttribute('title');
    }
}