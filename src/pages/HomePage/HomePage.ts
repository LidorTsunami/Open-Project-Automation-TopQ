import { BasePage } from '../BasePage';
import { HomePageLocators } from "./HomePageLocators";
import {SignInPage} from "../SignInPage/SignInPage";
import {OrgNameSignInPage} from "../OrgNameSignIn/OrgNameSignInPage";
import {Page} from "@playwright/test";


export class HomePage extends BasePage {
    locators = new HomePageLocators();
    orgNameSignInPage: OrgNameSignInPage;
    signInPage: SignInPage;

    constructor(page: Page) {
        super(page);
        this.orgNameSignInPage = new OrgNameSignInPage(page);
        this.signInPage = new SignInPage(page);
    }

    async open() {
        await this.page.goto(this.url);
    }

    async openProjects() {
        await this.page.click(this.locators.projectsMenu);
    }

    async selectProjectDemo() {
        await this.page.click(this.locators.demoProject);
    }

    async signIn() {
        await this.page.goto(this.url);
        await this.orgNameSignInPage.signIn();
        await this.signInPage.signIn();
    }
}