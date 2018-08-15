class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };
  }

  mouseOver() {
    this.setState({
      hovering: true
    });
  }

  mouseOut() {
    this.setState({
      hovering: false
    });
  }

  render() {

    var style = {
     fontWeight: this.state.hovering ? 'bold' : 'normal'
   };

    return (
      <li style={style} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <GroceryList groceryItems={['Milk', 'Eggs']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
