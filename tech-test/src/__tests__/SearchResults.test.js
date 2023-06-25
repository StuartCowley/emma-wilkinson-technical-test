import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
    const results = [];
    const { asFragment } = render(<SearchResults results={results} />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    })
});