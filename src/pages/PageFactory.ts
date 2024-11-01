import { Page } from 'playwright';
import { OrgNameSignInPage } from './OrgNameSignIn/OrgNameSignInPage';
import { SignInPage } from './SignInPage/SignInPage';
import { HomePage } from './HomePage/HomePage';
import { WorkspacePage } from './WorkSpace/WorkspacePage';
import {NavigationMenu} from "./NavigationMenu/NavigationMenu";

export class PageFactory {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    createOrgNameSignInPage(): OrgNameSignInPage {
        return new OrgNameSignInPage(this.page);
    }

    createSignInPage(): SignInPage {
        return new SignInPage(this.page);
    }

    createHomePage(): HomePage {
        return new HomePage(this.page);
    }

    createWorkspacePage(): WorkspacePage {
        return new WorkspacePage(this.page);
    }

    CreateNavigationMenuPage(): NavigationMenu {
        return new NavigationMenu(this.page);
    }
}