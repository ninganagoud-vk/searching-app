import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { getRecipies, getRecipeById, getPosts, getAxiosAlbums } from '../src/apis'; // Adjust import path as needed
import { IListingResponse, IDetailResponse, IErrorObject } from "../src/interfaces/recipe";
import axios from 'axios';


jest.mock('axios', () => ({
      get: jest.fn(),
      
    }));


describe('axios  mocking',()=>{
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any previous mocks before each test
      });




    test('getRecipeById should return data on successful fetch', async () => {

        (axios.get as jest.Mock).mockResolvedValueOnce({
            status:200,
            data:[
                {
                userId: 1,
                    id: 1,
                    title: "quidem molestiae enim"
                  },
            ]
        })

        const response=await getAxiosAlbums()
        expect(response.data).toEqual([
            {
            userId: 1,
                id: 1,
                title: "quidem molestiae enim"
              },
        ])


    })
})

