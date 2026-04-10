const {test} = require('@playwright/test'); 
const {expect} = require('@playwright/test');

//async is used to handle asynchronous operations in the test, allowing us to use await for better readability and control over the flow of the test execution.
// function() is an anyonymous function that serves as the callback for the test case, where we will write the actual test logic. 
// we can also use () => {} syntax for the callback function if we prefer arrow functions.
//test.only is a method provided by Playwright that allows us to run only a specific test case while skipping the others. This is useful for debugging or focusing on a particular test during development. By using test.only, we can ensure that only the specified test case will be executed, while the rest of the tests in the suite will be ignored.
test('first test in Playwright', async ()=> // Define a test case with a descriptive name and a callback function that contains the test logic
{
 console.log("This is my first test in Playwright"); // Log a message to the console to indicate that the test is running
});

test('Open the Browser for the first time', async ({browser}) =>
{
 //newContext() is a method provided by Playwright that creates a new browser context, which is an isolated environment for running tests. Each context can have its own cookies, cache, and other browser settings, allowing for better test isolation and parallel execution.
 const context = await browser.newContext();
 //newPage() is a method that creates a new page within the browser context. A page represents a single tab or window in the browser, and it allows us to interact with web content, navigate to URLs, and perform various actions on the page.
 const page =await context.newPage();
 //goto() is a method that navigates the page to a specified URL. In this case, we are navigating to "https://www.google.com". This allows us to test the functionality of the Google homepage or any other web page we want to interact with.
 await page.goto("https://www.google.com");
});

test('Open the browser with default browsercontext', async ({page})=>{
 await page.goto("https://www.amazonprime.com");
});

test('PageTitle test', async ({page})=>{
 await page.goto("https://www.google.com");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");
});

