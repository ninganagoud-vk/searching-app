import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import WrapperComponent from '@/components/wrapper'



const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: WrapperComponent, ...options})

export * from '@testing-library/react'
export {customRender as render}