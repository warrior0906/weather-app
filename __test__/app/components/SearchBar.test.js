import { render, screen, fireEvent, cleanup, renderHook } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { createStore } from "../../../src/app/store/Store";
import { SearchBar } from "../../../src/app/components/SearchBar";

describe("Search Bar component", () => {
    const produceComponent = () =>
        render(
            <Provider store={createStore()}>
                <SearchBar />
            </Provider>
        );
     
    afterEach(() => {
        cleanup();
    });

    it("should render Search Bar component correctly", () => {
        produceComponent();
    });

    it("should render input box correctly", () => {
        produceComponent();
        userEvent.type(screen.getByPlaceholderText(/Search City/i), 'Bangalore');
    });

    it("on change event for input", () => {
        produceComponent();
        const city = screen.getByPlaceholderText(/Search City/i);
        fireEvent.change(city, { target: { value: 'kanpur' } });
        expect(city.value).toBe('kanpur');
    });

    it("on submit event for form", () => {
        produceComponent();
        const city = screen.getByPlaceholderText(/Search City/i);
        fireEvent.change(city, { target: { value: "kanpur" } });
        fireEvent.click(city);
        fireEvent.submit(city); 
    });

    it("should return the initial values for inputCity", async () => {
        const { result } = renderHook(() => produceComponent());
        // const { inputCity } = result.current;
        console.log(result.current)

        // expect(inputCity).toBe('');
    });
});
