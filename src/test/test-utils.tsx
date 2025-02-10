import { render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'

function render(ui: ReactElement) {
  return rtlRender(
    <div style={{ width: '800px', height: '600px' }}>
      {ui}
    </div>
  )
}

export * from '@testing-library/react'
export { render }
