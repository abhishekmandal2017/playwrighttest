# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeApp.spec.js >> Rahul Shetty Practice app Registration
- Location: tests\PracticeApp.spec.js:4:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.headcolor')
Expected substring: "Account Created Successfully"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 40000ms
  - waiting for locator('.headcolor')

```

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: "#/auth/register"
- heading "Register" [level=1]
- text: First Name
- textbox "First Name": Jay
- text: Last Name
- textbox "Last Name": Shah
- text: Email
- textbox "email@example.com": jay.shah@gmail.com
- text: Phone Number
- textbox "enter your number": "1234567890"
- text: Occupation
- combobox:
  - option "Choose your occupation" [disabled] [selected]
  - option "Doctor"
  - option "Student"
  - option "Engineer"
  - option "Scientist"
- text: Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female Password
- textbox "Passsword": Test@123
- text: Confirm Password
- textbox "Confirm Password":
  - /placeholder: Confirm Passsword
  - text: Test@123
- checkbox [checked]
- text: I am 18 year or Older
- button "Register"
- paragraph: Already have an account? Login here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
  1  | const{test, expect}=require('@playwright/test');
  2  | 
  3  | 
  4  | test('Rahul Shetty Practice app Registration',async ({page})=>
  5  | {
  6  |     //const context=await browser.newContext();
  7  |    // const page=await context.newPage();
  8  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  9  | 
  10 |     const btnReg = page.locator("a.btn1");
  11 |     const txtbxFirstName = page.locator("[type='firstName']");
  12 |     const txtbxLastName = page.locator("[type='lastName']");
  13 |     const txtbxEmail = page.locator("[type='email']");
  14 |     const txtbxPhNum = page.locator("[formcontrolname='userMobile']");
  15 |     const txtbxPass = page.locator("[formcontrolname='userPassword']");
  16 |     const txtbxPassConfirm = page.locator("[formcontrolname='confirmPassword']");
  17 |     const chkbxAgeVerification = page.locator("[formcontrolname='required']");
  18 |     const btnFinalReg = page.locator("#login");
  19 |     await btnReg.click();
  20 |     await txtbxFirstName.fill("Jay");
  21 |     await txtbxLastName.fill("Shah");
  22 |     await txtbxEmail.fill("jay.shah@gmail.com");
  23 |     await txtbxPhNum.fill("1234567890");
  24 |     await txtbxPass.fill("Test@123");
  25 |     await txtbxPassConfirm.fill("Test@123");
  26 |     await chkbxAgeVerification.click();
  27 |     await btnFinalReg.click();
> 28 |     await expect(page.locator(".headcolor")).toContainText("Account Created Successfully");
     |                                              ^ Error: expect(locator).toContainText(expected) failed
  29 | });
  30 | test('Rahul Shetty Practice app Login',async ({page})=>
  31 | {
  32 |     //const context=await browser.newContext();
  33 |    // const page=await context.newPage();
  34 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  35 |     const txtbxEmail = page.locator("[type='email']");
  36 |     const txtbxPass = page.locator("[formcontrolname='userPassword']");
  37 |     const btnFinalReg = page.locator("#login");
  38 |     await txtbxEmail.fill("jay.shah@gmail.com");
  39 |     await txtbxPass.fill("Test@123");
  40 |     await btnFinalReg.click();
  41 |     console.log(await page.locator(".card-body h5").first().textContent());
  42 | 
  43 | });
```