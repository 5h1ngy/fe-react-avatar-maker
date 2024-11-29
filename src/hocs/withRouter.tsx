import { ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface WithRouterProps {
    router: {
        location: ReturnType<typeof useLocation>;
        navigate: ReturnType<typeof useNavigate>;
    };
}

/**
 * Higher-order component that provides routing-related props to the wrapped component.
 *
 * @param WrappedComponent - The component to be wrapped.
 * @returns A new component with added router props.
 */
export default function withRouter<P extends object>(WrappedComponent: ComponentType<P & WithRouterProps>) {
    /**
     * RouterComponent is a wrapper component that adds routing functionality
     * to the wrapped component's props, including location and navigation.
     *
     * @param props - The props passed to the component.
     * @returns The JSX for the wrapped component with added router props.
     */
    function RouterComponent(props: P) {
        const location = useLocation();
        const navigate = useNavigate();

        // Pass the router-related props to the wrapped component
        return <WrappedComponent {...props} router={{ location, navigate }} />;
    }

    return RouterComponent;
}
