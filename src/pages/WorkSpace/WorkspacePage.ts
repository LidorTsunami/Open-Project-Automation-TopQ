import { Page } from 'playwright';
import { TaskMakerPage } from './TaskMaker/TaskMakerPage';
import { FilterMenuPage } from './FilterPage/FilterPage';

export class WorkspacePage {
    private page: Page;
    taskMakerPage: TaskMakerPage;
    filterMenuPage: FilterMenuPage;

    constructor(page: Page) {
        this.page = page;
        this.taskMakerPage = new TaskMakerPage(page);
        this.filterMenuPage = new FilterMenuPage(page);
    }


    async deleteTask(): Promise<WorkspacePage> {
        await this.page.waitForTimeout(2000)
        await this.page.locator("//*[@id='content-body']/openproject-base/div/ui-view/work-packages-base/div/ui-view/wp-view-page/div/div[3]/div[2]/op-wp-split-view/div/div[2]/wp-details-toolbar/div/button").click();
        await this.page.locator("body > div.op-context-menu--overlay > ng-component > div > ul > li:nth-child(5) > a").click();
        await this.page.locator('#wp_destroy_modal > div.spot-action-bar > div > button.button.button_no-margin.-danger.spot-action-bar--action').click();
        return this;
    }
}