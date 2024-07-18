import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, type Pinia } from 'pinia'
import Hero from 'root/components/Hero.vue'
import router from 'root/router/router'

describe('Hero.vue', () => {
  let pinia: Pinia

  beforeEach(() => {
    pinia = createPinia()
  })

  it('renders hero section', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.hero-section').exists()).toBe(true)
  })

  it('renders intro container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro').exists()).toBe(true)
  })

  it('renders intro text container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro-text-container').exists()).toBe(true)
  })

  it('renders intro text', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro-text').exists()).toBe(true)
    expect(wrapper.find('.intro-text').text()).toBe(
      'Optimize Your Online Experience with Our Advanced URL Shortening Solution'
    )
  })

  it('renders intro description', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro-description').exists()).toBe(true)
    expect(wrapper.find('.intro-description').text()).toBe(
      'Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.'
    )
  })

  it('renders intro CTA container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro-cta-container').exists()).toBe(true)
  })

  it('renders intro CTA button', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.intro-cta-button').exists()).toBe(true)
    expect(wrapper.find('.intro-cta-button').text()).toBe('Get Started')
  })

  it('renders intro CTA link', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').text()).toBe('Learn More')
  })

  it('renders hero visuals container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.hero-visuals-container').exists()).toBe(true)
  })

  it('renders hero visuals image container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.hero-visual-image').exists()).toBe(true)
  })

  it('renders hero visuals image', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.link').find('img').exists()).toBe(true)
    expect(wrapper.find('.arrow').find('img').exists()).toBe(true)
  })

  it('renders hero visuals text container', () => {
    const wrapper = mount(Hero, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.hero-visual-text').exists()).toBe(true)
    expect(wrapper.find('.hero-visual-text').find('span').exists()).toBe(true)
  })
})
