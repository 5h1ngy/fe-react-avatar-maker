import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ConnectedProps } from "react-redux";

import { State, actions } from '@/store';

const mapStateToProps = (state: State) => ({
    ...state.containerMyList,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators(actions.containerMyList, dispatch),
})

const bind = connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
    state: stateProps,
    actions: dispatchProps,
    ...ownProps,
}));

export default bind

export type Bind = ConnectedProps<typeof bind>