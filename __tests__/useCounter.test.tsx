import '@testing-library/jest-dom'
import { render, screen,renderHook, act, prettyDOM } from '@testing-library/react'
import { useCounter } from '@/components/hooks/counter'

describe('Loader', () => {
  it('render customhook initial counter', () => {

const {result} =renderHook(useCounter,{
    initialProps:{
        defaultVal:12
    }
})
expect(result.current.count).toBe(12)
    // const imageElement=getByRole('img')
    // expect(imageElement).toBeInTheDocument()
    // expect(imageElement).toHaveAttribute('src','/loader.jpg')
    // expect(imageElement).toHaveAttribute('width','600')
  })
  it('should increment counter', () => {
    const {result} =renderHook(useCounter,{
      initialProps:{
          defaultVal:12
      }
  })
  act(()=>{
    result.current.increment()

  })
  expect(result.current.count).toBe(13)


  })
  it('should decrement counter', () => {
    const {result} =renderHook(useCounter,{
      initialProps:{
          defaultVal:12
      }
  })
  act(()=>{
    result.current.decrement()

  })
  expect(result.current.count).toBe(11)


  })
})