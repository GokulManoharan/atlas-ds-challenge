import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import _ from 'lodash';
import Select from "./index";

import options from "../../dropDownData.json";

const optionsInOrder = _.orderBy(options, ['type'], ['asc']);
const BASIC_PROPS = {
    options: jest.fn(),
    defaultValue: "Select",
    labelToDisplay: "label",
    onChange: jest.fn(),
    options: [],
};

describe('Custom select components', () => {

    test('Snapshot - defaults', () => {
        const { container } = render(
            <Select
                {...BASIC_PROPS}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('Selected option should be present in the document', () => {
        const newProps = {
            ...BASIC_PROPS,
            options
        }
        const { container, getByText } = render(
            <Select
                {...newProps}
            />
        );
        const dropDownHeaderElement = getByText('Select')
        fireEvent.click(dropDownHeaderElement);
        let firstOption = container.querySelectorAll('.sc-fujyAs')[0];
        let secondoption = container.querySelectorAll('.sc-fujyAs')[1];
        expect(firstOption.textContent).toBe(optionsInOrder[0].label);
        expect(secondoption.textContent).toBe(optionsInOrder[1].label);
        fireEvent.click(firstOption);
    })
})
