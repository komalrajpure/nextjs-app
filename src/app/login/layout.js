import Link from "next/link";
import './login.css'
export default function Layout({ children }) {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <h4>Login Navbar</h4>
                </li>
            <li>
                <Link href="/login">Login Main</Link>
            </li>
            <li>
                <Link href="/login/Studentlogin">Student Login </Link>
            </li>
            
            </ul>
            {children}
        </div>
    )
}