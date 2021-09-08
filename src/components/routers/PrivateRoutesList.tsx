import { Link } from 'react-router-dom';
interface PrivateRoutesListProps {

}

const PrivateRoutesList: React.FunctionComponent<PrivateRoutesListProps> = () => {
    return (
        <>
            <li className="nav-item active">
                <Link to="/post/create" className="nav-link">
                    New Post
                </Link>
            </li>
            <li className="nav-item active">
                <Link to="/myposts" className="nav-link">
                    My Posts
                </Link>
            </li>
        </>
    );
}

export default PrivateRoutesList;