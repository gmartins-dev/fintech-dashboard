import { Page } from '@playwright/test'

export async function login(page: Page, username: string, password: string) {
  // Navigate to login page
  await page.goto('/login')
  await page.waitForLoadState('domcontentloaded')
  await page.waitForLoadState('networkidle')

  // Fill login form
  const usernameInput = page.locator('input[type="text"], input[name="username"]').first()
  const passwordInput = page.locator('input[type="password"]').first()
  const submitButton = page.locator('button[type="submit"]')

  await usernameInput.fill(username)
  await passwordInput.fill(password)
  await submitButton.click()

  // Wait for navigation if successful login
  if (username === 'demo' && password === 'demo') {
    await page.waitForURL('/dashboard')
    await page.waitForSelector('svg.text-primary', { timeout: 10000 })
  }
}

export async function logout(page: Page) {
  // Wait for page to be stable
  await page.waitForLoadState('networkidle')

  // Look for the LogOut icon button
  const logoutButton = page.locator('button:has(svg.h-5.w-5)').nth(1)

  // Wait for button to be ready and click
  await logoutButton.waitFor({ state: 'visible', timeout: 15000 })
  await logoutButton.click()

  // Wait for navigation back to login
  await page.waitForURL('/login')
}
