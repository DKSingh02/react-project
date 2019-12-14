import React from 'react';
import BasicList from './basic-list';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Basic React App</h3>
                {this.state.items.length ?  <h4>Items: {this.state.items.length}</h4> : ''}
                <BasicList items={this.state.items} removeItem={this.removeItem.bind(this)}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add Items
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    removeItem(itemIndex) {
      const items = [...this.state.items];
      items.splice(itemIndex, 1);
       this.setState(() => ({
            items
       }));

    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Math.floor(Math.random() * 10000000),
            text: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

export default App;
