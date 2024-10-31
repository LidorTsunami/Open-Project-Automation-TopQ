import { BasePage } from './BasePage';

export class WorkspacePage extends BasePage {
    async createTask(taskName: string) {
        await this.page.click("#main-menu-work-packages span span");
        await this.page.click("button.-primary.add-work-package");
        await this.page.click("a[role='menuitem']:has(span:text('Task'))");
        await this.page.fill(".inline-edit--field.op-input.ng-pristine.ng-valid.ng-touched", taskName);
        await this.page.click("#work-packages--edit-actions-save");
    }

    async filterTask(taskName: string) {
        await this.page.click("#work-packages-filter-toggle-button");
        await this.page.fill("#filter-by-text-input", taskName);
    }

    async getTaskText(taskId: string) {
        return await this.page.locator(`tr[data-work-package-id="${taskId}"] .inline-edit--display-field.subject`).textContent();
    }
}