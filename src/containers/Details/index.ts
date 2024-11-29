import withRouter from '@/hocs/withRouter';
import component from './component'
import withContainer from './container';

export default withContainer(withRouter(component))