// @ts-check
const { defineConfig } = require('@playwright/test');


const config= defineConfig({
  testDir:'./tests',
  timeout:40000,
  expect :
  {
    timeout:40000,
  },
  reporter: [['line'], ['allure-playwright'], ['html']],
  use: {
    browserName:'chromium',
    headless:true
  },
});

module.exports=config;

