const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://localhost:3000/eRestaurant/register");

  // checks if registerPageNavbar exists. 
  await driver.findElement(By.id("registerPageNavbar"));
  // checks if registerPageLogo exists. 
  await driver.findElement(By.id("registerPageLogo"));
  // checks if registerPageHeading exists.
  await driver.findElement(By.id("registerPageHeading"));
  // checks if registerEmailInput exists.
  await driver.findElement(By.id("registerEmailInput"));
  // checks if registerFirstNameInput exists.
  await driver.findElement(By.id("registerFirstNameInput"));
  // checks if registerLastNameInput exists. 
  await driver.findElement(By.id("registerLastNameInput"));
  // checks if registerPhoneNumberInput exists.
  await driver.findElement(By.id("registerPhoneNumberInput"));
  // checks if registerPasswordInput exists.
  await driver.findElement(By.id("registerPasswordInput"));
  // checks if registerSignupButton exists.
  await driver.findElement(By.id("registerSignupButton"));
  
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