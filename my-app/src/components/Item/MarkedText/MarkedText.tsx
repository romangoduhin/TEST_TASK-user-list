import React from 'react';


function MarkedText({innerValue, searchValue}: { innerValue: string, searchValue: string }) {
    if (searchValue === "") return <p>{innerValue}</p>

    const isIncludes = innerValue.includes(searchValue);

    if (!isIncludes) return <p>{innerValue}</p>

    const markedText = `<mark>${searchValue}</mark>`;
    const newText = innerValue.replace(searchValue, markedText)

    return <p dangerouslySetInnerHTML={{__html: newText}}/>
}

export default MarkedText;