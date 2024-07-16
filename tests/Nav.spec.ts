import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Nav from 'root/components/Nav.vue'

describe('Nav', () => {
  it('should render the logo container', () => {
    const wrapper = mount(Nav)
    const logoContainer = wrapper.find('.logo-container')

    expect(logoContainer.exists()).toBe(true)
  })

  it('should render the logo image', () => {
    const wrapper = mount(Nav)
    const logoImage = wrapper.find('.logo img')

    expect(logoImage.exists()).toBe(true)
    expect(logoImage.attributes('src')).toBe('../media/svg/scissor.svg')
    expect(logoImage.attributes('alt')).toBe('logo')
  })

  it('should render the logo line', () => {
    const wrapper = mount(Nav)
    const logoLine = wrapper.find('.logo-line')

    expect(logoLine.exists()).toBe(true)
  })

  it('should render the logo text', () => {
    const wrapper = mount(Nav)
    const logoText = wrapper.find('.logo-text')

    expect(logoText.exists()).toBe(true)
    expect(logoText.text()).toBe('SCISSOR')
  })

  it('should render the navigation URLs when window width is greater than or equal to 600', () => {
    const wrapper = mount(Nav, {
      props: {
        windowWidth: 600
      }
    })
    const navUrls = wrapper.find('.nav-urls')

    expect(navUrls.exists()).toBe(true)
    expect(navUrls.findAll('li').length).toBe(2)
    expect(navUrls.findAll('a').length).toBe(2)
    expect(navUrls.findAll('a').at(0)?.text()).toBe('Features')
    expect(navUrls.findAll('a').at(1)?.text()).toBe('FAQs')
  })

  it('should not render the navigation URLs when window width is less than 600', () => {
    const wrapper = mount(Nav, {
      props: {
        windowWidth: 599
      }
    })
    const navUrls = wrapper.find('.nav-urls')

    expect(navUrls.exists()).toBe(false)
  })

  it('should render the login button when window width is greater than or equal to 600', () => {
    const wrapper = mount(Nav, {
      props: {
        windowWidth: 600
      }
    })
    const loginButton = wrapper.find('.login')

    expect(loginButton.exists()).toBe(true)
    expect(loginButton.text()).toBe('Login')
  })

  it('should not render the login button when window width is less than 600', () => {
    const wrapper = mount(Nav, {
      props: {
        windowWidth: 599
      }
    })
    const loginButton = wrapper.find('.login')

    expect(loginButton.exists()).toBe(false)
  })
})
