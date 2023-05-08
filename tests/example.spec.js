const { test, expect } = require('@playwright/test');
const MainPage  = require('../pages/main.page');
const IntroPage = require('../pages/intro.page');

const leftMenuItems = ["Getting Started", "Playwright Test", "Guides", "Migration", "Integrations"];

test.describe('Base tests', () => {

    test('Page title text', async ({ page }) => {
        const Main = new MainPage(page);
        await Main.openMainPage();
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('Get started link', async ({ page }) => {
        const Main = new MainPage(page);
        await Main.openMainPage();
        await Main.clickGetStarted();
        await expect(page).toHaveURL(/.*intro/);
    });

    test('Search doc modal', async ({ page }) => {
        const Main = new MainPage(page);
        const Intro = new IntroPage(page);
        await Main.openMainPage();
        await Main.clickGetStarted();
        await Intro.clickSearch();
        await expect(await Intro.isDocSearchPaneVisible()).toBe(true)
    });

    test('Left menu items', async ({ page }) => {
        const Main = new MainPage(page);
        const Intro = new IntroPage(page);
        await Main.openMainPage();
        await Main.clickGetStarted();
        await expect(await Intro.getItemCount()).toStrictEqual(leftMenuItems)
    });

});
