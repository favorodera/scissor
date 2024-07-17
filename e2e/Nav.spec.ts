import { test, expect } from '@playwright/test'

test('Nav is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:5174/')

  await expect(page).toHaveTitle('SCISSOR')

  const nav = page.getByRole('navigation')
  await expect(nav).toBeVisible()

  const logoContainer = nav.locator('.logo-container')
  await expect(logoContainer).toBeVisible()

  const logo = logoContainer.locator('.logo')
  await expect(logo).toBeVisible()

  const logoImage = logo.getByAltText('logo')
  await expect(logoImage).toBeVisible()

  const logoLine = logoContainer.locator('.logo-line')
  await expect(logoLine).toBeVisible()

  const logoText = logoContainer.locator('.logo-text')
  await expect(logoText).toBeVisible()
  await expect(logoText).toHaveText('SCISSOR')

  const navUrls = nav.getByRole('list')
  await expect(navUrls).toBeVisible()
  await expect(navUrls).toHaveClass('nav-urls')

  const loginButton = nav.locator('.login')
  await expect(loginButton).toBeVisible()
  await expect(loginButton).toHaveText('Login')
  await loginButton.click()
  await expect(page.locator('.authentication-container')).toBeVisible()
})
