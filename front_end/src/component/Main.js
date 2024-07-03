import Logo from '../logo.png';
import SignUpModal from './SignUpModal';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function Main() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '', pw: '' });
    const [cookie, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        if (cookie.login && cookie.login.id) {
            navigate('/home');
        }
    }, [cookie.login, navigate])

    useEffect(() => {
        const preventBackButton = () => {
            window.history.pushState(null, null, window.location.href);
            console.log("금지");
        }

        window.history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', preventBackButton);

        return () => window.removeEventListener('popstate', preventBackButton);
    }, []);

    const inputForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const login = async () => {
        console.log(formData);
        await axios.post(
            'http://localhost:8099/user/login',
            formData
        ).then(response => {
            console.log(response);
            alert("로그인 성공");
            setCookie("login", response.data, {path: "/", expires: new Date(Date.now() + 3600 * 1000 * 24)});
            navigate('/home');
            window.location.reload();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <img src={Logo} style={{ weight: '100px', height: '100px' }} />
                        <h1 className="text-5xl font-bold" style={{ color: '#515233', marginLeft: '10px' }}>VocaWave</h1>
                    </div>
                    <div className="text-center" style={{ whiteSpace: 'nowrap' }}>
                        <br />
                        <h3 className="text-1xl font-bold">VocaWave를 통해 간단하게 단어장을 제작하세요.</h3>
                        <h3 className="text-1xl font-bold">사람들과 제작한 단어장을 공유하세요.</h3>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ID</span>
                            </label>
                            <input type="text" name="id" placeholder="ID" className="input input-bordered" onChange={inputForm} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="pw" placeholder="password" className="input input-bordered" onChange={inputForm} required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={login}>Login</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Sign Up</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <SignUpModal />
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;