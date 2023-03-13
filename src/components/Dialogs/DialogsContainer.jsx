import {Dialogs} from "./Dialogs";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));