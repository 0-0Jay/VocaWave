import axios from "axios";
import { useState } from 'react';

function ItemListRow({ wordcode, code, num, word, mean}) {
    const [form] = useState({ wordcode: wordcode, code: code, word: word, mean: mean, type: 0 });

    const editWord = async () => {
        const word2 = prompt("단어 수정", word);
        if (word2 === null) {
            alert("취소되었습니다.");
            return;
        }
        const mean2 = prompt("의미 수정", mean);
        if (mean2 === null) {
            alert("취소되었습니다.");
            return;
        }
        form.word = word2;
        form.mean = mean2;
        form.type = 1;
        console.log(form);
        await axios.post(
            'http://localhost:8099/main/edit',
            form
        ).then(response => {
            console.log(response.data.status);
            alert("수정되었습니다!");
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteWord = async() => {
        await axios.post(
            'http://localhost:8099/main/edit',
            form
        ).then(response => {
            console.log(response.data.status);
            alert("삭제되었습니다!");
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <tr>
            <th>{num}</th>
            <td>{word}</td>
            <td>{mean}</td>
            <td>
                <button onClick={editWord}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </td>
            <td>
                <button onClick={deleteWord}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 42 42" 
                        className="h-4 w-4 opacity-70">
                        <path 
                            fillRule="evenodd"
                            d="M28 40H11.8c-3.3 0-5.9-2.7-5.9-5.9V16c0-.6.4-1 1-1s1 .4 1 1v18.1c0 2.2 1.8 3.9 3.9 3.9H28c2.2 0 3.9-1.8 3.9-3.9V16c0-.6.4-1 1-1s1 .4 1 1v18.1c0 3.2-2.7 5.9-5.9 5.9zM33.3 4.9h-7.6C25.2 2.1 22.8 0 19.9 0s-5.3 2.1-5.8 4.9H6.5C4.2 4.9 2.4 6.7 2.4 9s1.8 4 4.1 4h26.9c2.3 0 4.1-1.8 4.1-4.1s-1.9-4-4.2-4zM19.9 2c1.8 0 3.3 1.2 3.7 2.9h-7.5c.5-1.7 2-2.9 3.8-2.9zm13.4 9H6.5c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h26.9c1.1 0 2.1.9 2.1 2.1-.1 1.2-1 2.1-2.2 2.1z"></path><path d="M12.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1zM26.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1zM19.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default ItemListRow;