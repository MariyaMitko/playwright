module.exports = class Page {

    constructor(page) {
        this.page = page;
    }

    async openBrowserUrl (url) {
        await this.page.goto(url)
    }
};