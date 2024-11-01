import { BasePage } from '../BasePage';
import {Page} from "@playwright/test";
import {NavigationMenuLocators} from "./NavigationMenuLocators";

export class NavigationMenu extends BasePage {
    locators = new NavigationMenuLocators()
    constructor(page: Page) {
        super(page);
    }
    async enterWorkSpaces(){
        await this.page.click(this.locators.workSpaces);
    }
}