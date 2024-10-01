import '@testing-library/jest-dom'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import {fetchWeatherData} from '../src/apis'
import WeatherData from '@/components/spyOn/index'
import { title } from 'process';


// jest.mock('../src/apis/index', () => ({
//     fetchWeatherData: jest.fn(),
//   }));
  
// mock fetchWeatherData using jest.mock
// describe('mock weather data compoent by jest.mock',()=>{
   
//     it("fetches weather data and displays it", async () => {
//               const mockData = { title: 'Sunny Day' };
//     fetchWeatherData.mockResolvedValueOnce(mockData);

//     render(<WeatherData />);

//     await waitFor(() => {
//       expect(screen.getByText('Sunny Day')).toBeInTheDocument();
//     });

//           });
// })

// describe('mock weather data compoent by jest.spyon',()=>{
//     let fetchWeatherDataSpy;

//     beforeEach(()=>{
//         fetchWeatherDataSpy=jest.spyOn(foo,'fetchWeatherData').mockImplementation(async () => {
//             return { title: "Sun" }
//           });
//         jest.clearAllMocks();
//     })


//     it('displays weather data when fetched successfully', async () => {
//         const mockData = { title: 'Sun' };

// // fetchWeatherDataSpy.mockResolvedValueOnce(mockData)
// render(<WeatherData />);
// await pause()
// screen.debug()
// await waitFor(() => {
//     expect(screen.getByText('Sun')).toBeInTheDocument();
//   })

//     })

// })

// const pause=()=> new Promise((resolve)=>{
//     setTimeout(()=>{
// resolve('')
//     },1000)
// })


// Mock the fetchWeatherData function
jest.mock('../src/apis', () => ({
  fetchWeatherData: jest.fn(),
}));


describe('WeatherData Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders weather data on successful fetch', async () => {
    // Arrange: Set up the mock implementation
    fetchWeatherData.mockResolvedValue({ title: 'Sunny ' });

    // Act: Render the component
    render(<WeatherData />);

    // Assert: Wait for the data to appear
     waitFor(() => expect(screen.getByText('Sunny Day')).toBeInTheDocument());
  });
});


