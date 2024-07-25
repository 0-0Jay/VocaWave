import axios from "axios";
import { useState } from 'react';

function ItemListRow({code, num, word, mean}) {
    const [form, setForm] = useState({code : code, word : word, mean : mean, type : 1});

    const editWord = async() => {
        const mean2 = prompt("의미 수정", mean);
        if (mean2 === null) return;
        setForm({
            ...form,
            ['mean'] : mean2
        });

        await axios.post(
            'http://localhost:8099/main/edit',
            form
        ).then(response => {
            console.log(response.data.status);
            alert("수정되었습니다!");
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
        </tr>
    )
}

export default ItemListRow;