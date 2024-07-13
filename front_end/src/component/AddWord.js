import { useState, useRef } from "react";
import axios from 'axios';

function AddWord({setWordlist, code}) {
    const [form, setForm] = useState({code : code, word : '', mean : '', type : 2});
    const inputRef = useRef(null);

    const addWord = () => {
        const request = async() => {
            console.log(form);
            await axios.post(
                'http://localhost:8099/main/edit',
                form
            ).then(response => {
                console.log(response.data.status)
            }).catch(error => {
                console.log(error);
                alert("이미 존재하는 단어이거나 잘못된 형식입니다.");
            });
        }
        request();
        setWordlist(wl => [
            ...wl,
            {word: form.word, mean : form.mean}
        ]);
        setForm({
            ...form,
            word : '',
            mean : ''
        });
        inputRef.current.focus();
    }

    const addShare = (e) => {

    }

    const inputForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="modal-box w-2/5 max-w-5xl">
            <h3 className="font-bold text-lg pb-5">단어 추가</h3>
            <div className="collapse bg-base-200 items-center">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium ml-4">직접 입력</div>
                <div className="collapse-content">
                    <div className="form-control p-2">
                        <input type="text" ref={inputRef} name="word" placeholder="단어" value={form.word} className="input input-bordered bg-base-300" onChange={inputForm} required />
                    </div>
                    <div className="form-control p-2">
                        <textarea name="mean" value={form.mean} className="textarea textarea-bordered resize-none bg-base-300 h-32" placeholder="뜻 / 정의" onChange={inputForm} required></textarea>
                    </div>
                    <button className="btn btn-primary w-24" onClick={addWord}>추가하기</button>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium ml-4">코드 입력</div>
                <div className="collapse-content">
                    <div className="form-control p-2 items-center">
                        <input type="text" placeholder="공유 코드" className="input input-bordered bg-base-300 m-2 w-64" required />
                        <button className="btn btn-primary w-24" onClick={addShare}>추가하기</button>
                    </div>
                </div>
            </div>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </div>
    )
}

export default AddWord;