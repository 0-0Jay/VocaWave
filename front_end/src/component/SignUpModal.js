

function SignUpModal() {
    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">회원 가입</h3>
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
                    <input type="text" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nickname</span>
                    </label>
                    <input type="text" placeholder="nickname" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 modal-action">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpModal;