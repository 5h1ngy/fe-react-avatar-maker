import { ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface WithRouterProps {
    router: {
        location: ReturnType<typeof useLocation>;
        navigate: ReturnType<typeof useNavigate>;
    };
}

// HOC per aggiungere le proprietà di routing
export default function withRouter<P>(WrappedComponent: ComponentType<P & WithRouterProps>): React.FC<P> {
    const RouterComponent: React.FC<P> = (props) => {
        const location = useLocation();
        const navigate = useNavigate();

        return <WrappedComponent {...props} router={{ location, navigate }} />;
    };

    return RouterComponent;
}
