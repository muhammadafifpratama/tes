const {Builder,By} = require("selenium-webdriver");
// require("chromedriver");

async function first(params) {
    // 1. Launch browser
    let driver = new Builder().forBrowser("chrome").build()
    driver.manage().window().maximize()
    // 2. Navigate to url 'http://automationexercise.com'
    await driver.get("http://automationexercise.com")
    // 3. Verify that home page is visible successfully
    let home = await driver.findElement(By.linkText("Signup / Login"))
    let page = await home.getText()
    console.log(page + " telah muncul");
    // 4. Click on 'Signup / Login' button
    await driver.findElement(By.linkText("Signup / Login")).click()
    // 5. Verify 'New User Signup!' is visible
    try {
        console.log(await driver.findElement(By.xpath("//*[text()='New User Signup!']")).getText() + " telah visible");
    } catch (error) {
        console.log("gagal pindah halaman new user signup tidak visible");
    }
    // let asd = await driver.findElement(By.css("h2"))
    // let coba = await asd.getText()
    // console.log(coba);
    // 6. Enter name and email address
    await driver.findElement(By.xpath("//input[@data-qa='signup-name']")).sendKeys("guaplei")
    await driver.findElement(By.xpath("//input[@data-qa='signup-email']")).sendKeys("guaplei@gmail.com")
    // 7. Click 'Signup' button
    await driver.findElement(By.xpath("//button[@data-qa='signup-button']")).click()
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    try {
        console.log(await driver.findElement(By.xpath("//*[text()='Enter Account Information']")).getText() + " telah visible");
    } catch (error) {
        console.log("gagal pindah halaman Enter Account Information tidak visible");
    }
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // name email ga usah karena dari awal udah 
    await driver.findElement(By.xpath("//input[@value='Mr']")).click()
    await driver.findElement(By.xpath("//input[@data-qa='password']")).sendKeys("FR?cf$R4PQzcr>]#")
    await driver.findElement(By.css("#days>option[value='10']")).click()
    await driver.findElement(By.css("#months>option[value='6']")).click()
    await driver.findElement(By.css("#years>option[value='1992']")).click()
    // 10. Select checkbox 'Sign up for our newsletter!'
    await driver.findElement(By.id("newsletter")).click()
    // 11. Select checkbox 'Receive special offers from our partners!'
    await driver.findElement(By.id("optin")).click()
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await driver.findElement(By.id("first_name")).sendKeys("first")
    await driver.findElement(By.id("last_name")).sendKeys("name")
    await driver.findElement(By.id("company")).sendKeys("kantor")
    await driver.findElement(By.id("address1")).sendKeys("alamat")
    await driver.findElement(By.id("address2")).sendKeys("ini alamat 2")
    await driver.findElement(By.css("#country>option[value='Canada']")).click()
    await driver.findElement(By.id("state")).sendKeys("state artinya apa")
    await driver.findElement(By.id("city")).sendKeys("kota india")
    await driver.findElement(By.id("zipcode")).sendKeys("12345")
    await driver.findElement(By.id("mobile_number")).sendKeys("080989999")
    // 13. Click 'Create Account button'
    await driver.findElement(By.xpath("//button[@data-qa='create-account']")).click()
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    try {
        console.log(await driver.findElement(By.xpath("//h2[@data-qa='account-created']")).getText() + " telah visible");
    } catch (error) {
        console.log("tulisan account created tidak ada");
        // console.log(error);
    }
    // // 15. Click 'Continue' button
    await driver.findElement(By.linkText("Continue")).click()
    // // 16. Verify that 'Logged in as username' is visible
    try {
        console.log(await driver.findElement(By.xpath("//*[text()=' Logged in as ']")).getText() + " telah visible");
    } catch (error) {
        console.log("tulisan logged in as guaplei tidak ketemu");
        // console.log(error);
    }
    // //CLOSE THE FRIGGIN ADS
    // await driver.findElement(By.id("dismiss-button")).click()
    // 17. Click 'Delete Account' button
    await driver.findElement(By.xpath("//*[text()=' Delete Account']")).click()
    // // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    try {
        console.log(await driver.findElement(By.xpath("//h2[@data-qa='account-deleted']")).getText() + " telah visible");
    } catch (error) {
        console.log("tulisan account deleted tidak ketemu");
        // console.log(error);
    }
    await driver.findElement(By.linkText("Continue")).click()
    await driver.quit()

}

first()