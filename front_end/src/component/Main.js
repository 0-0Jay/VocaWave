import Logo from '../logo.png';
import SignUpModal from './SignUpModal';
import { useNavigate } from 'react-router-dom'

function Main() {
    const navigate = useNavigate();
    const login = () => {
        navigate('/home');
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
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ID</span>
                            </label>
                            <input type="text" placeholder="ID" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={login}>Login</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Sign Up</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <SignUpModal />
                        </dialog>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;