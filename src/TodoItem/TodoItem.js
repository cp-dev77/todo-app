import React from "react";
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BsCheck2Circle />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <MdOutlineDelete />
            </span>
        </li>
    );
};

export {
    TodoItem
}