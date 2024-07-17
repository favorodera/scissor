import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, type Pinia } from 'pinia'
import Nav from 'root/components/Nav.vue'
import router from 'root/router/router'

describe('Nav.vue', () => {
  let pinia: Pinia

  beforeEach(() => {
    pinia = createPinia()
  })

  it('renders nav element', () => {
    const wrapper = mount(Nav, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('renders logo container and logo image', () => {
    const wrapper = mount(Nav, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.logo-container').exists()).toBe(true)
    expect(wrapper.find('.logo-line').exists()).toBe(true)
    expect(wrapper.find('.logo').find('img').exists()).toBe(true)
  })

  it('renders navigation links', async () => {
    const wrapper = mount(Nav, { global: { plugins: [pinia, router] } })

    expect(wrapper.find('.nav-urls').exists()).toBe(true)
  })

  it('renders login button', async () => {
    const wrapper = mount(Nav, { global: { plugins: [pinia, router] } })
    expect(wrapper.find('.login').exists()).toBe(true)
  })
})
