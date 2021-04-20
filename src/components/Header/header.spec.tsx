import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the logo and the current time', () => {
    renderWithTheme(<Header />)

    const img = screen.getByRole('img', { name: /podcastr/i })

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'fones de ouvido')
    expect(screen.getByRole('time')).toBeInTheDocument()
  })
})
