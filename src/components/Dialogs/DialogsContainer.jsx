import {Dialogs} from "./Dialogs";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewMessage : (text) => {
      dispatch(updateMessageTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);