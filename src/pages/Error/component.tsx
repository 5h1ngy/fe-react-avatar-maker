import { useRouteError } from "react-router-dom"

const Component: React.FC = () => {
    let error = useRouteError();
    console.error(error);

    return <div>Dang!!</div>;
}

export default Component