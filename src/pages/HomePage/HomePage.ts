import { BasePage } from '../BasePage';
import {HomePageLocators} from "./HomePageLocators";

export class HomePage extends BasePage {
    locators = new HomePageLocators
    async openProjects() {
        await this.page.click(this.locators.projectsMenu);
    }

    async selectProjectDemo() {
        await this.page.click(this.locators.demoProject);
    }
}
