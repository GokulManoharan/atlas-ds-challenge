import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCheck, faFrown } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownSelectedOption,
    DropDownChevronIconSpan,
    DropDownListContainer,
    DropDownList,
    ListItem,
    DropDownIconSpan,
    DropDownLabelSpan,
    DropDownDescription,
    HrItem,
    NoDataFoundSpan
} from './SelectComponents';

const Options = ({
    options,
    selectedOption,
    handleSelect,
    extended,
    isBgDark,
    labelToDisplay,
    type
}) => {
    const optionsInOrder = _.orderBy(options, [type], ['asc']);
    return (
        <DropDownListContainer extended={extended} length={options.length}>
            {
                options.length === 0 ?
                    <NoDataFoundSpan isBgDark={isBgDark}>
                        <FontAwesomeIcon icon={faFrown} color={isBgDark ? "#CDD0E0" : "#6E7492"} size="2x" />
                        <span>
                            No data found!
                        </span>
                    </NoDataFoundSpan>
                    :
                    <DropDownList isBgDark={isBgDark}>
                        {
                            optionsInOrder.map((option, i) => (
                                <React.Fragment key={option[labelToDisplay] + i}>
                                    <ListItem
                                        onClick={() => handleSelect(option)}
                                        selected={selectedOption[labelToDisplay] === option[labelToDisplay]} extended={extended}
                                        isBgDark={isBgDark}
                                    >
                                        {
                                            selectedOption[labelToDisplay] === option[labelToDisplay] &&
                                            <DropDownIconSpan>
                                                <FontAwesomeIcon icon={faCheck} color="#F9FAFC" />
                                            </DropDownIconSpan>
                                        }
                                        <DropDownLabelSpan>
                                            {option[labelToDisplay]}
                                        </DropDownLabelSpan>
                                        {
                                            extended &&
                                            <DropDownDescription selected={selectedOption[labelToDisplay] === option[labelToDisplay]} isBgDark={isBgDark}>
                                                {option.description}
                                            </DropDownDescription>
                                        }
                                    </ListItem>
                                    {
                                        i !== optionsInOrder.length - 1 && optionsInOrder[i].type !== optionsInOrder[i + 1].type &&
                                        <HrItem isBgDark={isBgDark} />
                                    }
                                </React.Fragment>
                            )
                            )
                        }
                    </DropDownList>
            }
        </DropDownListContainer>

    )
}

const Select = ({
    options = [],
    extended = false,
    isBgDark = false,
    labelToDisplay = "label",
    defaultValue = "Select",
    onChange = () => {},
    type = 'type'
}) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [toggleMenu, setToggleMenu] = useState(false);

    const node = useRef();

    const handleClickOutside = e => {
        if (node?.current?.contains(e.target)) {
            return;
        }
        setToggleMenu(toggle => !toggle)
    }

    useEffect(() => {
        if (toggleMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleMenu]);

    const handleToggle = () => setToggleMenu(toggle => !toggle)

    const handleSelect = option => {
        setSelectedOption(option);
        handleToggle();
        // Write the functionality to return the selected option to the parent component
        // onChange()
    }

    return (
                <DropDownContainer ref={node}>
                    <DropDownHeader onClick={handleToggle} isBgDark={isBgDark}>
                        <DropDownSelectedOption>{selectedOption[labelToDisplay] || defaultValue}</DropDownSelectedOption>
                        <DropDownChevronIconSpan>
                            <FontAwesomeIcon icon={toggleMenu ? faChevronUp : faChevronDown}
                                color={!isBgDark ? "#CDD0E0" : "#6E7492"} />
                        </DropDownChevronIconSpan>
                    </DropDownHeader>
                    {
                        toggleMenu && (
                            <Options
                                options={options}
                                selectedOption={selectedOption}
                                handleSelect={handleSelect}
                                extended={extended}
                                isBgDark={isBgDark}
                                labelToDisplay={labelToDisplay}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                type={type}
                            />
                        )
                    }
                </DropDownContainer>
    )
}

export default Select
