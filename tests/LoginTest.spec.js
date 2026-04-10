const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
require('dotenv').config();

//Positive Login Test
test('Login Test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.fill("#username", process.env.USERNAME);
    await page.fill("#password", process.env.PASSWORD);
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");
});

//Negative Login Test, Invalid username and valid password
//Negative Login Test, valid username and invalid password
//Negative Login Test, invalid username and invalid password
//Negative Login Test, empty username and empty password
//Negative Login Test, empty username and valid password
//Negative Login Test, valid username and empty password

// we can also use test.describe to group all the negative login test cases together and run them as a suite. This helps in organizing the tests and makes it easier to manage and maintain them.
test.describe('Negative Login Tests', () => {
    test('Invalid username and valid password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", "invalidUsername");
        await page.fill("#password", process.env.PASSWORD);
        await page.locator("#signInBtn").click();
        // we can also add assertions here to verify that the login failed and the appropriate error message is displayed.
        console.log(await page.locator("[style*='block']").textContent('Incorrect'));
    });
    
    test('Valid username and invalid password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", process.env.USERNAME);
        await page.fill("#password", "invalidPassword");
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent('Incorrect'))
    });

    test('Invalid username and invalid password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", "invalidUsername");
        await page.fill("#password", "invalidPassword");
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent('Incorrect'))
    });
    
    test('Empty username and empty password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", "");
        await page.fill("#password", "");
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent('Incorrect'))
    });

    test('Empty username and valid password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", "");
        await page.fill("#password", process.env.PASSWORD);
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent('Incorrect'))
    });
    
    test('Valid username and empty password', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", process.env.USERNAME);
        await page.fill("#password", "");
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent('Incorrect'))
    });
    });