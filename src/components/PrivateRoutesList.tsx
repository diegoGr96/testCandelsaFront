import { Link } from 'react-router-dom';
interface PrivateRoutesListProps {

}

const PrivateRoutesList: React.FunctionComponent<PrivateRoutesListProps> = () => {
    return (
        <>
            <li className="nav-item active">
                <Link to="/private-page" className="nav-link">
                    Private Page
                </Link>
            </li>
            <li className="nav-item active">
                <Link to="/private-page2" className="nav-link">
                    Private Page  2
                </Link>
            </li>
        </>
    );
}

export default PrivateRoutesList;