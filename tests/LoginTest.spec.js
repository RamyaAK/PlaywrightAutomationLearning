const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
require('dotenv').config();


test.only('Login Test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.fill("#username", process.env.USERNAME);
    await page.fill("#password", process.env.PASSWORD);
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");
});