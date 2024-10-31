import { Page } from 'playwright';
import { OrgNameSignInPage } from './OrgNameSignInPage';
import { SignInPage } from './SignInPage';
import { HomePage } from './HomePage';
import { WorkspacePage } from './WorkspacePage';

export class PageFactory {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    createOrgNameSignInPage() {
        return new OrgNameSignInPage(this.page);
    }

    createSignInPage() {
        return new SignInPage(this.page);
    }

    createHomePage() {
        return new HomePage(this.page);
    }

    createWorkspacePage() {
        return new WorkspacePage(this.page);
    }
}