const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://localhost:3000/eRestaurant/staff/signin");

  // checks if staffLoginPageNavbar exists. 
  await driver.findElement(By.id("staffLoginPageNavbar"));
  // checks if staffLoginPageLogo exists.
  await driver.findElement(By.id("staffLoginPageLogo"));
  // checks if staffEmailInput exists.
  await driver.findElement(By.id("staffEmailInput"));
  // checks if staffPasswordInput exists.
  await driver.findElement(By.id("staffPasswordInput"));
  // checks if staffForgotPasswordLink exists.
  await driver.findElement(By.id("staffForgotPasswordLink"));
  // checks if staffLoginButton exists.
  await driver.findElement(By.id("staffLoginButton"));
  
  //It is always a safe practice to quit the browser after execution
  await driver.quit();

  return true;
}

example().then((result) => {
  if (result) {
    console.log("Passed");
  } else {
    console.error("Failed");
  }
}).catch((any) => {
  console.error("Failed");
})