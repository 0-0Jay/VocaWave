import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfileModal() {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies([]);
    const [formPw, setFormPw] = useState({ id: cookie.login.id , pw: '', newpw: '' });
    const [formNick, setFormNick] = useState({ id: cookie.login.id, pw: '', nick: '' });
    const [formLeave, setFormLeave] = useState({ id: cookie.login.id, pw: ''});

    const changeNick = async(e) => {
        e.preventDefault()
        await axios.post(
            'http://localhost:8099/user/changeNick',
            formNick
        ).then(response => {
            console.log(response);
            setCookie("login", {id : formNick.id, nick : formNick.nick}, {path: "/", expires: new Date(Date.now() + 3600 * 1000 * 24)});
            alert("변경되었습니다.");
            window.location.reload();
        }).catch(error => {
            alert("이미 존재하는 닉네임이거나 입력이 잘못되었습니다.");
            console.log(error);
        })
    }

    const changePw = async(e) => {
        e.preventDefault()
        console.log(formPw);
        await axios.post(
            'http://localhost:8099/user/changePw',
            formPw
        ).then(response => {
            console.log(response);
            if (response.data.result === true) {
                alert("변경되었습니다.");
            } else {
                alert("비밀번호가 틀렸거나 입력이 잘못되었습니다.");
            }
        }).catch(error => {
            alert("모든 칸을 입력해주세요!");
            console.log(error);
        })
        setFormPw({
            ...formPw,
            pw : '',
            newpw : ''
        });
    }

    const leave = async(e) => {
        e.preventDefault();
        await axios.post(
            'http://localhost:8099/user/leave',
            formLeave
        ).then(response => {
            console.log(response);
            if (response.data.result === true) {
                alert("탈퇴되었습니다.");
                removeCookie("login", { path: '/' });
                navigate("/");
                window.location.reload();
            } else {
                alert("비밀번호가 틀렸거나 입력이 잘못되었습니다.");
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const inputPw = (e) => {
        setFormPw({
            ...formPw,
            [e.target.name]: e.target.value,
        })
    }

    const inputNick = (e) => {
        setFormNick({
            ...formNick,
            [e.target.name]: e.target.value,
        })
    }

    const inputLeave = (e) => {
        setFormLeave({
            ...formLeave,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">내 정보</h3>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ID</span>
                    </label>
                    <input type="text" value={cookie.login.id} name="id" className="input input-bordered" readOnly />
                    <label className="label">
                        <span className="label-text">NICKNAME</span>
                    </label>
                    <input type="text" value={cookie.login.nick} name="nick" className="input input-bordered" readOnly />
                </div>
                <div className="collapse bg-base-200 items-center">
                    <input type="checkbox" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium ml-4">닉네임 변경</div>
                    <div className="collapse-content">
                        <div className="form-control p-2">
                        <input type="text" placeholder="비밀번호 입력" name="pw" className="input input-bordered bg-base-300" onChange={inputNick} required />
                            <input type="text" placeholder="새 닉네임 입력" name="nick" className="input input-bordered bg-base-300 mt-3" onChange={inputNick} required />
                            <button className="btn btn-primary mt-3" onClick={changeNick}>닉네임 변경하기</button>
                        </div>
                    </div>
                </div>
                <div className="collapse bg-base-200 items-center">
                    <input type="checkbox" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium ml-4">비밀번호 변경</div>
                    <div className="collapse-content">
                        <div className="form-control p-2">
                            <input type="text" placeholder="기존 비밀번호 입력" name="pw" value={formPw.pw} className="input input-bordered bg-base-300" onChange={inputPw} required />
                            <input type="text" placeholder="새 비밀번호 입력" name="newpw" value={formPw.newpw} className="input input-bordered bg-base-300 mt-3" onChange={inputPw} required />
                            <button className="btn btn-primary mt-3" onClick={changePw}>비밀번호 변경하기</button>
                        </div>
                    </div>
                </div>
                <div className="collapse bg-base-200 items-center">
                    <input type="checkbox" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium ml-4">회원 탈퇴</div>
                    <div className="collapse-content">
                        <div className="form-control p-2">
                            <input type="text" placeholder="비밀번호 입력" name="pw" value={formLeave.pw} className="input input-bordered bg-base-300" onChange={inputLeave} required />
                            <button className="btn btn-primary mt-3" onClick={leave}>회원 탈퇴</button>
                        </div>
                    </div>
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

export default ProfileModal;