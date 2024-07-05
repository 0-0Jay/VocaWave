import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';


function AddList() {
    const [cookie] = useCookies(['login']);
    const [formData, setFormData] = useState({wtitle: '', cmt: '', id : cookie.login.id});

    const clear = () => {
        setFormData({wtitle: '', cmt: '', id : cookie.login.id});
    }

    const inputForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const create = async() => {
        await axios.post(
            'http://localhost:8099/main/create',
            formData
        ).then(response => {
            alert('추가되었습니다!');
            clear();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="modal-box w-2/5 max-w-5xl">
            <h3 className="font-bold text-lg pb-5">새 단어장 생성</h3>
            <div className="form-control p-2">
                <input type="text" name="wtitle" placeholder="제목을 입력하세요." className="input input-bordered bg-base-300" onChange={inputForm} value={formData.wtitle}required />
            </div>
            <div className="form-control p-2">
                <textarea name="cmt" className="textarea textarea-bordered resize-none bg-base-300 h-32" placeholder="간략한 설명을 입력해주세요." onChange={inputForm} value={formData.cmt} required></textarea>
            </div>
            <button className="btn btn-primary w-24" onClick={create}>생성하기</button>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={clear}>✕</button>
                </form>
            </div>
        </div>
    )
}

export default AddList;