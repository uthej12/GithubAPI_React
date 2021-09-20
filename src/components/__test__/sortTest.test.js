import { render, screen, cleanup } from "@testing-library/react";
import SortGist from '../sortGist';
import '@testing-library/jest-dom/extend-expect';

afterEach(()=>{
    cleanup();
})

test("Correct dropdown label", () =>{
    const component = render(<SortGist/>);
    const mainText = component.getByTestId("dropdownButton");

    expect(mainText.textContent).toBe("Sort By");
});

test("Correct dropdown content 1", ()=>{
    const component = render(<SortGist/>);
    const newFirst = component.getByTestId("dropdownOption1");

    expect(newFirst.textContent).toBe("Newest first");
});

test("Correct dropdown content 2", ()=>{
    const component = render(<SortGist/>);
    const oldFirst = component.getByTestId("dropdownOption2");

    expect(oldFirst.textContent).toBe("Oldest first");
});