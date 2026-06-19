const{test, expect}=require('@playwright/test');


test('Rahul Shetty Practice app Registration',async ({page})=>
{
    //const context=await browser.newContext();
   // const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const btnReg = page.locator("a.btn1");
    const txtbxFirstName = page.locator("[type='firstName']");
    const txtbxLastName = page.locator("[type='lastName']");
    const txtbxEmail = page.locator("[type='email']");
    const txtbxPhNum = page.locator("[formcontrolname='userMobile']");
    const txtbxPass = page.locator("[formcontrolname='userPassword']");
    const txtbxPassConfirm = page.locator("[formcontrolname='confirmPassword']");
    const chkbxAgeVerification = page.locator("[formcontrolname='required']");
    const btnFinalReg = page.locator("#login");
    await btnReg.click();
    await txtbxFirstName.fill("Jay");
    await txtbxLastName.fill("Shah");
    await txtbxEmail.fill("jay.shah@gmail.com");
    await txtbxPhNum.fill("1234567890");
    await txtbxPass.fill("Test@123");
    await txtbxPassConfirm.fill("Test@123");
    await chkbxAgeVerification.click();
    await btnFinalReg.click();
    await expect(page.locator(".headcolor")).toContainText("Account Created Successfully");
});
test('Rahul Shetty Practice app Login',async ({page})=>
{
    //const context=await browser.newContext();
   // const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const txtbxEmail = page.locator("[type='email']");
    const txtbxPass = page.locator("[formcontrolname='userPassword']");
    const btnFinalReg = page.locator("#login");
    await txtbxEmail.fill("jay.shah@gmail.com");
    await txtbxPass.fill("Test@123");
    await btnFinalReg.click();
    console.log(await page.locator(".card-body h5").first().textContent());

});