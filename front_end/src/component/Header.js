import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../logo.png';
import { useEffect } from 'react';


function Header() {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        if (!cookie.login || !cookie.login.id) {
            navigate("/");
            window.location.reload();
        }
    }, [cookie.login, navigate])

    const logout = () => {
        alert("로그아웃");
        removeCookie("login", { path: '/' });
        navigate("/");
        window.location.reload();
    }

    return (
        <div className="navbar bg-base-200 fixed" style={{zIndex: '10000'}}>
            <div className="drawe flex-none">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="drawer-side" style={{zIndex: '10000'}}>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><a className="text-1xl font-semibold font-mono" onClick={() => {navigate('/mywordlist')}}>나의 단어장</a></li>
                        <li><a className="text-1xl font-semibold font-mono" onClick={() => {navigate('/shareboard')}}>단어장 공유</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1" onClick={() => { navigate('/home') }}>
                <a className="btn btn-ghost text-xl">
                    <img src={Logo} style={{ weight: '20px', height: '20px' }} />
                    <h1 className="text-2xl font-bold" style={{marginLeft: '10px' }}>VocaWave</h1>
                </a>
            </div>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="coffee" />
                {/* sun icon */}
                <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a><h1 className="text-1xl font-bold">Welcome!</h1></a></li>
                    <li>
                        <details>
                            <summary className="text-1xl font-bold">{cookie.login.nick}</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a className='text-xs font-mono font-semibold'>PROFILE</a></li>
                                <li><a className='text-xs font-mono font-semibold' onClick={logout}>LOGOUT</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;