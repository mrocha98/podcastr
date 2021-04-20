// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Player } from '.'

describe('<Player />', () => {
  it('should render', () => {
    renderWithTheme(<Player />)
  })
})
