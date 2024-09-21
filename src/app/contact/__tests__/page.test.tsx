import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import ContactPage from '../page'

test('ContactPage', () => {
  render(<ContactPage />)
  expect(screen.getByRole('heading', { level: 1, name: 'Contact Us' })).toBeDefined()
  expect(screen.getByRole('textbox', { name: 'Name:' })).toBeDefined()
  expect(screen.getByRole('textbox', { name: 'Message:' })).toBeDefined()
  expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined()
  expect(screen.getByRole('button', { name: 'Is it accessible?' })).toBeDefined()
  expect(screen.getByRole('button', { name: 'Is it styled?' })).toBeDefined()
  expect(screen.getByRole('button', { name: 'Is it animated?' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Homes' })).toBeDefined()
})
