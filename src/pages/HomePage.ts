import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    async openProjects() {
        await this.page.click("#projects-menu");
    }

    async selectProject() {
        await this.page.click("span[data-test-selector='op-header-project-select--item-title'] span");
    }
}
