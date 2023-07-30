import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { createStore } from "../../../src/app/store/Store";
import { Dashboard } from "../../../src/app/screens/Dashboard";

describe("Dashboard component", () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <Dashboard />
      </Provider>
    );
  
  afterEach(() => {
    cleanup();
  });

  it("should render Dashboard component correctly", () => {
    produceComponent();
    const element = screen.getByText(/Weather App/i);
    expect(element).toBeInTheDocument();
  });

  it("should render states correctly", () => {
    produceComponent();
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 10,
              longitude: 10
            }
          })
        )
      )
    }
    navigator.geolocation = mockGeolocation
  });

  // beforeEach(() => {
  //   fetchMock.resetMocks();
  // });

  // it('renders users when API call succeeds', async () => {
  //   const forecastData = {
  //     list: [],
  //   };
  //   fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => forecastData) })

  //   produceComponent();

  //   expect(screen.getByRole('heading')).toHaveTextContent('List of Users')

  //   expect(await screen.findByText('Joe')).toBeInTheDocument()
  //   expect(await screen.findByText('Tony')).toBeInTheDocument()

  //   expect(screen.queryByText('No users found')).not.toBeInTheDocument()
  // });

});