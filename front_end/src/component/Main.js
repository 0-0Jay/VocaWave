import Logo from '../logo.png';

function Main() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <span>
                            <img src={Logo} style={{weight: '100px', height: '100px'}}/>
                        </span>
                        <h1 className="text-5xl font-bold" style={{color:'#515233', marginLeft: '10px'}}>VocaWave</h1>
                    </div>
                    <p className="py-6">
                        VocaWave를 통해 간단하게 단어장을 제작하세요 사람들과 공유하세요.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;