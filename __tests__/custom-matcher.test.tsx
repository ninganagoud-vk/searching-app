

import '@testing-library/jest-dom'
import { logRoles, render, screen, within } from '@testing-library/react'
import CustomMatcher from '@/components/custom-matcher'

function  toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);
  const pass = elements.length === quantity;
  if (pass) {
    return {
      message: () => `expected ${container} not to contain ${quantity} element(s) with role "${role}"`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${container} to contain ${quantity} element(s) with role "${role}", but found ${elements.length}`,
      pass: false,
    };
  }
}

function toCheckCustomValue(container, role, quantity = '') {

  const elements = within(container).getByRole(role)
  const pass =elements.value==quantity
  if (pass) {
    return {
      message: () => `expected ${container} not to contain ${quantity} element(s) with role "${role}"`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${container} to contain ${quantity} element(s) with role "${role}", but found ${elements.length}`,
      pass: false,
    };
  }
}


expect.extend({
  toContainRole,
  toCheckCustomValue
  
  });

describe('Loader', () => {
  it('check wheatehr 2 buttom are present or not ', () => {
    const { getByRole,container } = render(<CustomMatcher />);
    logRoles(container)

  const formm=getByRole('form')  



  expect(formm).toContainRole('button', 2);

  expect(formm).toCheckCustomValue('textbox','god')


  
  
  
  })
})