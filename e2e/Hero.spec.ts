import { test, expect } from '@playwright/test'

test('Hero section is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const heroContainer = page.locator('.hero-section')
  await expect(heroContainer).toHaveAttribute('aria-haspopup', 'false')
  await expect(heroContainer).toBeVisible()

  const heroIntroContainer = heroContainer.locator('.intro')
  await expect(heroIntroContainer).toBeVisible()

  const introTextContainer = heroIntroContainer.locator('.intro-text-container')
  await expect(introTextContainer).toBeVisible()

  const introText = introTextContainer.locator('.intro-text')
  await expect(introText).toBeVisible()
  await expect(introText).toContainText(
    'Optimize Your Online Experience with Our Advanced URL Shortening Solution'
  )

  const introDescription = introTextContainer.locator('.intro-description')
  await expect(introDescription).toBeVisible()
  await expect(introDescription).toContainText(
    ' Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. '
  )

  const introCtaContainer = heroIntroContainer.locator('.intro-cta-container')
  await expect(introCtaContainer).toBeVisible()

  const introCtaButton = introCtaContainer.locator('.intro-cta-button')
  await expect(introCtaButton).toBeVisible()
  await expect(introCtaButton).toContainText('Get Started')

  const introCtaLink = introCtaContainer.getByRole('link')
  await expect(introCtaLink).toBeVisible()
  await expect(introCtaLink).toHaveAttribute('href', '#about')
  await expect(introCtaLink).toContainText('Learn More')

  const heroVisualsContainer = heroContainer.locator('.hero-visuals-container')
  await expect(heroVisualsContainer).toBeVisible()

  const heroVisualImageContainer = heroVisualsContainer.locator('.hero-visual-image')
  await expect(heroVisualImageContainer).toBeVisible()

  const heroVisualImages = heroVisualImageContainer.locator('.link')
  await expect(heroVisualImages).toHaveCount(4)

  const heroVisualTextContainer = heroVisualsContainer.locator('.hero-visual-text')
  await expect(heroVisualTextContainer).toBeVisible()
})
