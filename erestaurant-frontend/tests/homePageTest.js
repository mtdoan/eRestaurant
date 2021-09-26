const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://localhost:3000/eRestaurant");

  // checks if homePromotionalImg exists. 
  await driver.findElement(By.id("homePromotionalImg"))
  // checks if homePageNavbar exists. 
  await driver.findElement(By.id("homePageNavbar"));
  // checks if centerMenuBar exists.
  await driver.findElement(By.id("centerMenuBar"));
  // checks if rightAccessibilityBar exists.
  await driver.findElement(By.id("rightAccessibilityBar"));
  
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