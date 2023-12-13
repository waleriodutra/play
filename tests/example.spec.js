// @ts-check
// import { test, expect } from '@playwright/test';

const { test, expect } = require('@playwright/test');

test.beforeEach(async( {page} ) => {
  await page.goto('https://automationpratice.com.br');
});

test('Login com Sucesso - 01 @login', async ({ page }) => {

  /* scroll buscando botão */
  // const botao = await page.getByRole('button', { name: 'Send Mail' })
  // await botao.scrollIntoViewIfNeeded();
  // await botao.click();

  /* scroll buscando testo */
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.waitForTimeout(5000);
  // await page.screenshot({path: 'screenshot/screenshot.png'});
  await page.locator('#user').click();
  await page.locator('#user').fill('garupa@garupa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.waitForTimeout(2000);
  // await page.locator('#password').screenshot({ path: 'screenshot/login.png'})
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

}); 


test('Login com Sucesso - 02', async ({ page }) => {

  /* scroll buscando testo */
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();
  
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#user').click();
  await page.locator('#user').fill('garupa@garupa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

}); 

test('Login com Sucesso - 03', async ({ page }) => {

  /* scroll buscando testo */
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#user').click();
  await page.locator('#user').fill('garupa@garupa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

}); 

test.afterEach(async ({page}) => {
  
})

