import { render, screen, cleanup } from "@testing-library/react";
import GistHeader from "../gistHeader";
import '@testing-library/jest-dom/extend-expect';

afterEach(()=>{
    cleanup();
})

test("Rendering Correct image", ()=> {
    const component = render(<GistHeader 
                            owner={{avatar_url:"url", login:"owner"}}
                            filename={"filename"}
                            createdAt={"2021-09-20T09:59:34Z"}
                            description={"Description of file"}/>)
    
    const imageAvatar = component.getByTestId("avatar");

    expect(imageAvatar).toHaveAttribute("src", "url");
})

test("Rendering Correct Name", ()=> {
    const component = render(<GistHeader 
                            owner={{avatar_url:"url", login:"owner"}}
                            filename={"filename"}
                            createdAt={"2021-09-20T09:59:34Z"}
                            description={"Description of file"}/>)
    
    const owner = component.getByTestId("ownerName");

    expect(owner).toHaveTextContent("owner");
})

test("Rendering Correct description", ()=> {
    const component = render(<GistHeader 
                            owner={{avatar_url:"url", login:"owner"}}
                            filename={"filename"}
                            createdAt={"2021-09-20T09:59:34Z"}
                            description={"Description of file"}/>)
    
    const description = component.getByTestId("description");

    expect(description).toHaveTextContent("Description of file");
})