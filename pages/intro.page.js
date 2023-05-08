const BasePage = require("./base.page");

module.exports = class IntroPage extends BasePage {

    get leftPanel () { return '.theme-doc-sidebar-item-category-level-1' }
    get leftMenuItems () { return '.menu__link--sublist' }
    get btnSearch () { return '.DocSearch-Button-Placeholder' }
    get paneSearch () { return '.DocSearch-Modal' }
    get inptSearch () { return '.DocSearch-SearchBar' }

    async getItemCount () {
        return await this.page.locator(this.leftPanel).locator(this.leftMenuItems).allTextContents()
    }

    async clickSearch () {
        await this.page.locator(this.btnSearch).click()
    }

    async isDocSearchPaneVisible () {
        await this.page.locator(this.paneSearch).waitFor();
        return await this.page.locator(this.inptSearch).isVisible()
    }

};

