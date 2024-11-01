import { BasePage } from '../BasePage';
import { TaskMakerPage } from './TaskMaker/TaskMakerPage';
import {Page} from "@playwright/test";
import {WorkSpaceLocators} from "./WorkSpaceLocators";
import {FilterPage} from "./FilterPage/FilterPage";

export class WorkspacePage extends BasePage {
    taskMakerPage: TaskMakerPage;
    filterPage: FilterPage;
    locators = new WorkSpaceLocators()

    constructor(page:Page) {
        super(page);
        this.taskMakerPage = new TaskMakerPage(page);
        this.filterPage = new FilterPage(page)
    }

    async enterTaskMaker() {
        await this.page.click(this.locators.createDropdown);
        await this.page.click(this.locators.taskButton);
    }

    async openFilterPage() {
        await this.page.click(this.locators.filterButton);
    }

    async deleteFilteredTask() {
        await this.page.locator(this.locators.taskOptionsDropdown).click();
        await this.page.locator(this.locators.deleteTaskButton).click()
        await this.page.locator(this.locators.confirmDeleteButton).click()
    }
}