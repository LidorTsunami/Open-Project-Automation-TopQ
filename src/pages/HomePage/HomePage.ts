import { Page } from 'playwright';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

export class HomePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openDemoProject(): Promise<NavigationMenu> {
        await this.page.click("#projects-menu");
        await this.page.click("span[data-test-selector='op-header-project-select--item-title'] span");
        return new NavigationMenu(this.page);
    }
}