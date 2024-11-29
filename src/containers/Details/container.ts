import { connect, ConnectedProps } from "react-redux";

import { State } from '@/store';

const mapStateToProps = (state: State) => ({
    pageLanding: state.pageLanding,
    containerDetails: state.containerDetails,
})

const mapDispatchToProps = () => ({})

const bind = connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
    state: stateProps,
    actions: dispatchProps,
    ...ownProps,
}));

export default bind

export type Bind = ConnectedProps<typeof bind>