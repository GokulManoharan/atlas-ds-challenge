import styled from 'styled-components';

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktop})`
  };

export const DropDownContainer = styled("div")`
  width: 10.5rem;
  margin: 0;
  color: ${props => !props.isBgDark? "#191D2F" : "#CDD0E0"};
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 4px;
  padding: 12px;
  border: 1px solid ${props => props.isBgDark ? "#CDD0E0" : "#6E7492"};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.3rem;
  background: ${props => props.isBgDark ?  "#191D2F" : "#F9FAFC"};
  color: ${props => !props.isBgDark? "#191D2F" : "#CDD0E0"};
  display: flex;
  align-items: center;
  user-select: none;
  display: flex;
  justify-content: space-between;
  height: 32px;
`;

export const DropDownSelectedOption = styled("span")`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const DropDownChevronIconSpan = styled("span")`
    margin-left: 12px;
`;
export const DropDownIconSpan = styled("span")`
`;
export const DropDownLabelSpan = styled("span")`
    margin: 5px 0 5px 12px;
`;

export const DropDownListContainer = styled("div")`
  width: ${props => props.extended ? "250%" : "130%"};
  height: ${props => props.length > 0 ? "" : "200px"};
  box-shadow: 0px 2px 8px 0px ${props => props.isBgDark ? "#191D2F" : "#6E7492"};
  box-sizing: border-box;
  border: 1px solid #6E7492;
  border-radius: 4px;
  @media ${devices.mobileS} { 
    width: ${props => props.extended && "130%"};
  }
  @media ${devices.mobileM} { 
    width: ${props => props.extended && "150%"};
  }
  @media ${devices.mobileL} { 
    width: ${props => props.extended && "175%"};
  }
  @media ${devices.tablet} { 
    width: ${props => props.extended && "250%"};
  }
  @media ${devices.laptop} { 
    width: ${props => props.extended && "250%"};
  }
  @media ${devices.laptopL} { 
    width: ${props => props.extended && "250%"};
  }
  @media ${devices.desktop} { 
    width: ${props => props.extended && "250%"};
  }
`;

export const DropDownList = styled("ul")`
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  height: 300px;
  overflow: auto;
  background: ${props => props.isBgDark ?  "#191D2F" : "#F9FAFC"};
  &:first-child {
    padding-top: 0.3rem;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: ${props => props.selected ? "0.4rem 16px 12px 12px" : "10px 16px 12px 2rem"};
  background: ${props => props.selected ? props.isBgDark ? "#05778F" : "#00A3BE" : ""};
  color: ${props => props.isBgDark ? "#CDD0E0" : props.selected ? "#ECEEF4" : "#191D2F"}; 
  &:hover {
      background:  ${props => props.selected ? props.isBgDark ? "#05778F" : "#00A3BE" : props.isBgDark ? "#6E7492" : "#ECEEF4"};
  }
  &:last-child {
    margin-bottom: 0.3rem;
    padding-bottom: 0.6rem;
  }
  @media ${devices.mobileS} { 
    height: ${props => props.extended ? "110px" : "24px"};
  }
  @media ${devices.mobileM} { 
    height: ${props => props.extended ? "100px" : "24px"};
  }
  @media ${devices.mobileL} { 
    height: ${props => props.extended ? "100px" : "24px"};
  }
  @media ${devices.tablet} { 
    height: ${props => props.extended ? "60px" : "24px"};
  }
  @media ${devices.laptop} { 
    height: ${props => props.extended ? "60px" : "24px"};
  }
  @media ${devices.laptopL} { 
    height: ${props => props.extended ? "60px" : "24px"};
  }
  @media ${devices.desktop} { 
    height: ${props => props.extended ? "60px" : "24px"};
  }
`;

export const DropDownDescription = styled("p")`
    margin: ${props => props.selected ? "0 16px 4px 2.25rem" : "0 16px 4px 14px"};
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.isBgDark ? "#CDD0E0" : props.selected ? "#ECEEF4" : "#191D2F"}; 
  &:hover {
      background:  ${props => props.selected ? props.isBgDark ? "#05778F" : "#00A3BE" : props.isBgDark ? "#6E7492" : "#ECEEF4"};
  }
`;

export const HrItem = styled.hr`
    border: 0.5px solid ${props => props.isBgDark ? "#6E7492" : "#CDD0E0"};
    margin: 4px 0;
`
export const NoDataFoundSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${props => props.isBgDark ? "#CDD0E0" : "#6E7492"}; 
    & span{
      margin-left: 1rem;
    }
`
