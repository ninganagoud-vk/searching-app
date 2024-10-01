import '@testing-library/jest-dom'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import Posts from '@/components/users/msw-posts'


describe('msw: Mocking with msw package', () => {
it('render list of posts',async () => {
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.

  const { findAllByRole } = render(<Posts />)

  await waitFor(() => {
    // Expect to find "Post 1" and "Post 2" which are from mocked API response
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

// const els=await findAllByRole('listitem')
//  expect(els).toHaveLength(4)
})
})