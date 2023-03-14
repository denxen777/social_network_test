import {Component} from "react";

export class UserStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>}

        {this.state.editMode && <div>
          <input
            type="text"
            autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={this.deactivateEditMode}
            value={this.state.status}/>
        </div>}
      </>
    );
  }
}
