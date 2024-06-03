const { Builder, By, until, Button } = require("selenium-webdriver");
let driver;

// beforeAll(async () => {

//     driver = await new Builder().forBrowser("chrome").build();
// })

test("ob der Titel korrekt angezeigt wird", async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3001");
  const inputName = await driver.findElement(By.id("inputName"));
  const inputEmail = await driver.findElement(By.id("inputEmail"));
  const button = await driver.findElement(By.tagName("button"));
  await inputName.sendKeys("ameni");
  await inputEmail.sendKeys("ameni@gmail.com")
  await button.click();
  //
  await driver.wait(until.elementLocated(By.tagName("tbody")));
  const tabletext = await driver.findElement(By.tagName("tbody")).getText();
  const amenipresnt = tabletext.includes("ameni");
  const ameniemail = tabletext.includes("ameni@gmail.com");
  expect(amenipresnt).toBe(true);
  expect(ameniemail).toBe(true);
  
  setTimeout(async () => {
    await driver.quit();
  }, 5000); 
})