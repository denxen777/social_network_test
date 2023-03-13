import {Component} from "react";

export class UserStatus extends Component {
  state = {
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>}
        </div>
        <div>
          {this.state.editMode && <input onBlur={this.toggleEditMode} type="text" value={this.props.status}/>}
        </div>
      </>
    );
  }
}