import {Dialogs} from "./Dialogs";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewMessage: (text) => {
      dispatch(updateMessageTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);