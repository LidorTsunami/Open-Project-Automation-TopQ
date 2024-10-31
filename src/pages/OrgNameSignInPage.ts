import { BasePage } from './BasePage';

export class OrgNameSignInPage extends BasePage {
    async signIn(orgName: string) {
        await this.page.fill("#signin-input", orgName);
        await this.page.click("//*[@id='signin']/input");
    }
}
