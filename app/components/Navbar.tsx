import {Link, useNavigate} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex items-center gap-4">
                {auth.isAuthenticated ? (
                    <>
                        <Link to="/upload" className="primary-button w-fit">
                            Upload Resume
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="primary-button w-fit"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/auth?next=/" className="primary-button w-fit">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}
export default Navbar
