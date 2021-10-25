const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://localhost:3000/eRestaurant/signin");

  // checks if customerLoginPageNavbar exists. 
  await driver.findElement(By.id("customerLoginPageNavbar"));
  // checks if customerLoginPageLogo exists. 
  await driver.findElement(By.id("customerLoginPageLogo"));
  // checks if staffLoginLink exists. 
  await driver.findElement(By.id("staffLoginLink"));
  // checks if customerEmailInput exists. 
  await driver.findElement(By.id("customerEmailInput"));
  // checks if customerPasswordInput exists. 
  await driver.findElement(By.id("customerPasswordInput"));
  // checks if customerLoginButton exists. 
  await driver.findElement(By.id("customerLoginButton"));
  
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