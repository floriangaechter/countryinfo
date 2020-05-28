import { render, cleanup } from '@testing-library/react'

import CountryPage from './CountryPage'

describe('CountryPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CountryPage />)
    }).not.toThrow()
  })
})
