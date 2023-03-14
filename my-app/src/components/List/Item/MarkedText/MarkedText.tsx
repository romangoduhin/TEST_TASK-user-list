import React from 'react';
import {Props} from "./MarkedText.types";


function MarkedText({innerValue, searchValue}: Props) {
    if (searchValue === "") return <p>{innerValue}</p>

    const isIncludes = innerValue.includes(searchValue);

    if (!isIncludes) return <p>{innerValue}</p>

    const markedText = `<mark>${searchValue}</mark>`;
    const newText = innerValue.replace(searchValue, markedText)

    return <p dangerouslySetInnerHTML={{__html: newText}}/>
}

export default MarkedText;