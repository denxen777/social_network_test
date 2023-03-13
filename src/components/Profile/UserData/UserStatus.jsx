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
        {!this.state.editMode && <div>
          <span onDoubleClick={this.toggleEditMode}>Статус: {this.props.status}</span>
        </div>}

        {this.state.editMode && <div>
          <input autoFocus={true} onBlur={this.toggleEditMode} type="text" value={this.props.status}/>
        </div>}
      </>
    );
  }
}
