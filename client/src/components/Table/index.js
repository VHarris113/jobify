import React from 'react';

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <button
          onClick={this.handleClick.bind(this)}
        >
          Add Item
        </button>
      </div>
    );
  }
}