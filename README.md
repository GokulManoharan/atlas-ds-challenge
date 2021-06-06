# Custom Select component
### Open [this codesandbox link](https://codesandbox.io/s/github/GokulManoharan/react-custom-select-component) for a demo

# How to see this application running in local?

Clone this repo into your local and navigate to the folder 'react-custom-select-component'

## Available Scripts
### `npm install` 

Installs the project dependencies

### `npm start`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About

This is a React component for selecting options (Single option as of now) built using Styled components from scratch. It can be used for making simple selection and also extended version on the component can provide additional information below each option in the dropdown.

It can also categorize the options visually and logically based on their types. In case of no options provided, it displays a message "No data found!".
Few basic test cases are added with '@testing-library/react' and can increase the test cases when required.

## Props

| Name         | Type    | Description                                                | Default  | Is Mandatory? |
|--------------|---------|------------------------------------------------------------|----------|---------------|
| options      | Array   | List of options users can select from                | [ ]      | Optional
| extended     | Boolean | Displays additional information about an option below it | false    | Optional
| defaultValue | string  | Default value to display in the dropdown header            | "Select" | Optional
| onChange | function| subscribe to change events     | () => {} | Optional
| labelToDisplay | string | default property of the option object to display | "label" | Optional
| type | string | Property name in option object based on which the options should be separated logically | 'type' | Optional

## Usage
```JSX
import React, { useState } from 'react';
import Select from "./components/Select";

const options = [
    {
        "label": "Hopper",
        "value": "Hopper",
        "description": "Grace Hopper was an American computer scientist and US Navy rear admiral.",
        "type": "type1"
    },
    {
        "label": "Holberton",
        "value": "Holberton",
        "description": "Frances Elizabeth Holberton was one of the programmers of the first computer.",
        "type": "type2"
    },
    {
        "label": "Teitelbaum",
        "value": "Teitelbaum",
        "description": "Ruth Teitelbaum was one of the first computer programmers in the world.",
        "type": "type1"
    }
]

export default function App() {
  const [options] = useState(dropDownValues);

  return (
    <div className="App">
       <Select 
        extended={extended} 
        options={options}
        defaultValue="Select"
        labelToDisplay="label"
        handleChange={() => {}} // Pass the onChange handler here
      />
    </div>
  );
}
```
