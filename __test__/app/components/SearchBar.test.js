import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { SearchBar } from "../../../src/app/components/SearchBar";

describe("Search Bar component", () => {

    it("should render Search Bar component correctly", () => {
        render(<SearchBar />);
    });

    it("should render input box correctly", () => {
        render(<SearchBar />)
        userEvent.type(screen.getByPlaceholderText(/Search City/i), 'Bangalore');
    });

    it("on change event for input", () => {
        render(<SearchBar />)
        const city = screen.getByPlaceholderText(/Search City/i);
        fireEvent.change(city, { target: { value: 'kanpur' } });
        expect(city.value).toBe('kanpur');
    });

    it("on submit event for form", () => {
        render(<SearchBar />);
        // const mockSubmit = jest.fn();
        fireEvent.submit(screen.queryByTestId("form"));
        // expect(mockSubmit).toHaveBeenCalled();
        // expect(mockSubmit.mock.calls).toEqual([[{name: 'Joe Doe'}]]); 
    });
});
