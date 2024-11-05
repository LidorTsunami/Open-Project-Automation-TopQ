import { Page } from 'playwright';

export class FilterMenuPage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openFilter(): Promise<FilterMenuPage> {
        await this.page.click("#work-packages-filter-toggle-button");
        return this;
    }

    async filterByText(text: string): Promise<FilterMenuPage> {
        await this.page.fill("#filter-by-text-input", text);
        return this;
    }

    async getTaskText(): Promise<string | null> {
        const taskLocator = this.page.locator('//*[@id="content-body"]/openproject-base/div/ui-view/work-packages-base/' +
            'div/ui-view/wp-view-page/div/div[3]/div[2]/op-wp-split-view/div/div[1]/edit-form/div[1]/' +
            'div/wp-subject/div/div[2]/op-editable-attribute-field/div/div[2]/span');
        return await taskLocator.getAttribute('title');
    }
}
