import { render, screen, cleanup } from "@testing-library/react";
import GistDisplay from "../gistDisplay";
import '@testing-library/jest-dom/extend-expect';

afterEach(()=>{
    cleanup();
})

test("Rendering Correct Text", ()=> {
    const component = render(<GistDisplay text={["Line 1", "Line 2"]}/>)
    const textContent = component.getByTestId("textContent");

    expect(textContent).toHaveTextContent("Line 1");
    expect(textContent).toHaveTextContent("Line 2");
})