import styled from 'styled-components';

export const AppContainer = styled.div`
padding: 5rem;
min-height: 100vh;
margin: 0;
font-family: -apple-system, 'Segoe UI', 'Roboto', 'Arial', sans-serif;
background-color: ${props => props.backgroundColor};
`

export const OptionsWrapper = styled.div`
display: flex;
  
@media (max-width: 768px) {
  display: grid;
}
`

export const CheckBoxWrapper = styled.div`
display: flex;
`;

export const Label = styled.label`
padding: 0.4rem;
margin-bottom: 2rem;  
color: ${props => props.isBgDark ? "#FFFFFF" : "#191D2F"};
`;

export const Input = styled.input`
zoom: 2;
`;