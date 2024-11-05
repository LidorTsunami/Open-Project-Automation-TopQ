import { Page } from 'playwright';

export class TaskMakerPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openNewTask(): Promise<TaskMakerPage> {
        await this.page.click("button.-primary.add-work-package");
        await this.page.click("a[role='menuitem']:has(span:text('Task'))");
        return this;
    }

    async fillTaskSubject(subject: string): Promise<TaskMakerPage> {
        await this.page.locator("#wp-new-inline-edit--field-subject").first().fill(subject);
        return this;
    }

    async saveTask(){
        await this.page.click("#work-packages--edit-actions-save");
    }
}