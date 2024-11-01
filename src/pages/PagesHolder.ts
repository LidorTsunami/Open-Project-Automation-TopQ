import { Page } from 'playwright';
import { OrgNameSignInPage } from './OrgNameSignIn/OrgNameSignInPage';
import { SignInPage } from './SignInPage/SignInPage';
import { HomePage } from './HomePage/HomePage';
import { WorkspacePage } from './WorkSpace/WorkspacePage';
import {PageFactory} from "./PageFactory";
import {NavigationMenu} from "./NavigationMenu/NavigationMenu";

export class PageHolder {
    readonly orgNameSignInPage: OrgNameSignInPage;
    readonly signInPage: SignInPage;
    readonly homePage: HomePage;
    readonly workspacePage: WorkspacePage;
    readonly navigationPage: NavigationMenu;

    constructor(page: Page) {
        const pageFactory = new PageFactory(page);
        this.orgNameSignInPage = pageFactory.createOrgNameSignInPage();
        this.signInPage = pageFactory.createSignInPage();
        this.homePage = pageFactory.createHomePage();
        this.workspacePage = pageFactory.createWorkspacePage();
        this.navigationPage = pageFactory.CreateNavigationMenuPage()
    }
}
