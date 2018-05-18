import React from 'react';

const List = (props) => {
    return (
        <ul>
            {props.list.map((item) => (
                <li key={item.id}>
                    {item.label}
                </li>
            ))}
        </ul>
    )
}

export default List;
