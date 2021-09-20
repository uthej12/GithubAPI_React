import { render, screen, cleanup } from "@testing-library/react";
import Pagination from "../Pagination";
import '@testing-library/jest-dom/extend-expect';

afterEach(()=>{
    cleanup();
})

test("Previous button rendered correctly", ()=>{
    const component = render(<Pagination pageNo={1}
                totalPages={5} />)

    const prev = component.getByTestId("prev");

    expect(prev).toHaveTextContent("«");
});

test("Next button rendered correctly", ()=>{
    const component = render(<Pagination pageNo={1}
                totalPages={5} />)

    const next = component.getByTestId("next");

    expect(next).toHaveTextContent("»");
});

test("Active Page highlighted", ()=>{
    const component = render(<Pagination pageNo={1}
                totalPages={5} />)

    const curPage = component.getByTestId("activePage");

    expect(curPage).toHaveTextContent("2");
});