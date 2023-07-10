import React from 'react'

const Tab = props => {

    const {tab, index, setIndex} = props;

    const {label, content} = tab;

    const tabSelected = (e, index) => {
        setIndex(index);
    }

    return (
        <div>
            <button
            onClick = { e => tabSelected(e, index)}
            className="button btn-secondary d-inline-block mx-2 px-2">
                {label}
            </button>
        </div>
    )
}

export default Tab
