const BasePage = require("./base.page");

module.exports = class MainPage extends BasePage {

    async openMainPage () {
        await this.openBrowserUrl('https://playwright.dev/')
    }

    async clickGetStarted () {
        await this.page.getByRole('link', { name: 'Get started' }).click()
    }
};