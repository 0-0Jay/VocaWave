import { useState } from 'react';
import axios from 'axios';

function SignUpModal() {
    const [formData, setFormData] = useState({ id : '', pw : '', nick : ''});
    const signUp = async(e) => {
        e.preventDefault()
        console.log(formData);
        await axios.post(
            'http://localhost:8099/user/signup',
            formData
        ).then(response => {
            console.log(response);
            if (response.data.result === true) {
                alert("회원가입 되었습니다.");
                window.location.reload();
            } else {
                alert("회원가입에 실패했습니다. 이미 있는 ID 또는 닉네임입니다.");
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const inputForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">회원 가입</h3>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ID</span>
                    </label>
                    <input type="text" placeholder="ID" name="id" className="input input-bordered" onChange={inputForm} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" name="pw" className="input input-bordered" onChange={inputForm} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nickname</span>
                    </label>
                    <input type="text" placeholder="nickname" name="nick" className="input input-bordered" onChange={inputForm} required />
                </div>
                <div className="form-control">
                    <br></br>
                    <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
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