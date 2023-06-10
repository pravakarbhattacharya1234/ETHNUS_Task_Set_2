class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result: ""
      };
    }
  
    handleClick = (value) => {
      if (value === "=") {
        try {
          const result = eval(this.state.result);
          this.setState({ result });
        } catch (error) {
          this.setState({ result: "Error" });
        }
      } else if (value === "C") {
        this.setState({ result: "" });
      } else {
        this.setState((prevState) => ({
          result: prevState.result + value
        }));
      }
    };
  
    render() {
      return (
        <div className="calculator">
          <input
            className="input"
            type="text"
            value={this.state.result}
            readOnly
          />
          <div>
            <button className="button" onClick={() => this.handleClick("1")}>
              1
            </button>
            <button className="button" onClick={() => this.handleClick("2")}>
              2
            </button>
            <button className="button" onClick={() => this.handleClick("3")}>
              3
            </button>
            <button className="button" onClick={() => this.handleClick("+")}>
              +
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.handleClick("4")}>
              4
            </button>
            <button className="button" onClick={() => this.handleClick("5")}>
              5
            </button>
            <button className="button" onClick={() => this.handleClick("6")}>
              6
            </button>
            <button className="button" onClick={() => this.handleClick("-")}>
              -
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.handleClick("7")}>
              7
            </button>
            <button className="button" onClick={() => this.handleClick("8")}>
              8
            </button>
            <button className="button" onClick={() => this.handleClick("9")}>
              9
            </button>
            <button className="button" onClick={() => this.handleClick("*")}>
              *
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.handleClick("0")}>
              0
            </button>
            <button className="button" onClick={() => this.handleClick(".")}>
              .
            </button>
            <button className="button" onClick={() => this.handleClick("=")}>
              =
            </button>
            <button className="button" onClick={() => this.handleClick("/")}>
              /
            </button>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Calculator />, document.getElementById("root"));
  