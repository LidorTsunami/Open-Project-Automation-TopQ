import { BasePage } from '../BasePage';
import {Page} from "@playwright/test";
import {WorkspacePage} from "../WorkSpace/WorkspacePage";

export class NavigationMenu extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    async enterWorkSpaces(): Promise<WorkspacePage> {
        await this.page.click("#main-menu-work-packages span span");
        return new WorkspacePage(this.page);
    }
}