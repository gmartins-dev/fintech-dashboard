import { test, expect } from '@playwright/test'
import { login } from './utils/auth'

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'demo', 'demo')
    await page.waitForSelector('text=Portfolio Overview', {
      state: 'visible',
      timeout: 5000
    })
  })

  test('displays all portfolio sections', async ({ page }) => {
    for (const section of ['Portfolio Overview', 'Portfolio Allocation', 'Historical Performance', 'Positions']) {
      await expect(page.getByText(section, { exact: true })).toBeVisible()
    }
  })

  test('theme toggle works', async ({ page }) => {
    const html = page.locator('html')
    await page.click('button[aria-label="Toggle theme"]')
    await expect(html).toHaveClass(/dark/)
    await page.click('button[aria-label="Toggle theme"]')
    await expect(html).not.toHaveClass(/dark/)
  })

  test('portfolio charts are interactive', async ({ page }) => {
    // Wait for chart to be ready
    await page.waitForSelector('select:first-of-type')

    // Test view type selector
    const viewSelect = page.locator('select').first()
    await viewSelect.waitFor({ state: 'visible' })

    // Change and verify selection
    await viewSelect.selectOption('type')
    await expect(viewSelect).toHaveValue('type')
    await page.waitForTimeout(1000) // Wait for chart update

    // Test time range selector
    const timeSelect = page.locator('select').nth(1)
    await timeSelect.waitFor({ state: 'visible' })
    await timeSelect.selectOption('1Y')
    await expect(timeSelect).toHaveValue('1Y')
  })
})
