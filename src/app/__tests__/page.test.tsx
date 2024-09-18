import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'
 
test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Learn' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Examples' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Go to nextjs.org →' })).toBeDefined()
  expect(screen.getByRole('img', { name: 'Next.js logo' })).toBeDefined()
  expect(screen.getByRole('img', { name: 'Vercel logomark' })).toBeDefined()
})