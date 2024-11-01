import {BasePage} from "../../BasePage";
import {FilterPageLocators} from "./FilterPageLocators";

export class FilterPage extends BasePage{
    locators = new FilterPageLocators()

    async filterTask(taskName: string) {
        await this.page.fill(this.locators.filterInput, taskName);
    }
}