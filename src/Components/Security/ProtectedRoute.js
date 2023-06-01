import { Navigate } from "react-router-dom";
import { GetCurrentUser } from '../../Services/Service';

export default function ProtectedRoute({ children }) {
    const IsAuth = () => GetCurrentUser() !== null;

    return (
        <>
            { IsAuth() ? children : <Navigate to="/" replace /> }
        </>
    );
}