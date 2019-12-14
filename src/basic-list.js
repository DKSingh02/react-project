import React from 'react';

class BasicList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.items.map((item, index ) => (
                    <li key={item.id} onClick={() => this.props.removeItem(index)}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default BasicList;