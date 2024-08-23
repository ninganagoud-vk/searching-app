import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { getRecipies, getRecipeById } from '../src/apis'; // Adjust import path as needed
import { IListingResponse, IDetailResponse, IErrorObject } from "../src/interfaces/recipe";
import { json } from 'stream/consumers';
import exp from 'constants';

describe('API Functions', () => {

  beforeEach(() => {
    // Reset the fetch mock before each test
    global.fetch = jest.fn();

  });

  test('getRecipies should return data on successful fetch', async () => {
    const mockData: IListingResponse = { 
      from:'1',
hits:[{
  name:'burger'
}],
count:1,
__links:{name:'nonveg'}

     };
(global.fetch as jest.Mock).mockResolvedValueOnce({
  ok: true,
      status: 200,
      json: async () => mockData
})

const params = new URLSearchParams({ type: 'public',
  app_id: "b72bb112",
  app_key: 'c4615d10a88089afc5050da5f9f84f18',
  q: 'q',
  })
const result = await getRecipies(params);

expect(global.fetch).toHaveBeenLastCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v2?${params}`)

expect(result).toEqual(mockData);


  })

  test('getRecipeById should return data on successful fetch', async () => {
    const mockData: IDetailResponse = {
      recipe:{
        name:'burger'
      },
      __links:{name:'nonveg'}
     };

     (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json:()=>mockData
     })

     const id = '123';
     const params = 'include=details';
     const result = await getRecipeById(id, params);

     expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v2/${id}?${params}`);
 expect(result).toEqual(mockData)

  })

})

