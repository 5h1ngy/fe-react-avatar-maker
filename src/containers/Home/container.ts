import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { actions } from '@/store/home';
import { State as GlobalState } from '@/store';

const mapStateToProps = (state: GlobalState) => ({
    ...state.home,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    ...actions
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
    state: stateProps,
    actions: dispatchProps,
    ...ownProps,
}));