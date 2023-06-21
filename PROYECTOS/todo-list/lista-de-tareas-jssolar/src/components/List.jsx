import { FaBeer } from 'react-icons/fa';
import React from 'react';

export function List (props){
    return (
        <> 
        <li className="list-group-item d-flex justify-content-between m-1 rounded"> {props.tarea} <FaBeer onClick={props.deleteTarea} className='eliminar' /></li>
        </>
    )
}

