import { render, getByText, fireEvent } from "@testing-library/react"
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import React from 'react'
import Button from "components/Button"

describe("Button", () => {
    test("should display text", () => {
        const { container } = render(<Button text="Hello im a button" />)
        getByText(container, "Hello im a button")
    })
})

describe("Button", () => {
    test("should handle click events", () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <Button text="Click me, maybe?" onClick={onClickMock} />
        );
        const component = container.firstChild
        fireEvent.click(component)
        expect(onClickMock).toBeCalled();
    })
})
//testing style
// test("should make text uppercase", () => {
//     const tree = renderer.create(<Button text="We Salute You!" />).toJSON()
//     const component = getByText(tree, "We Salute You!");
  
//     expect(component).toHaveStyleRule("text-transform", "uppercase");
//   });