import React from 'react';
import './Todos.scss';
import {useState} from 'react';

const Todos = () => {
    const [data, setData] = useState(['Walk the Dog', 'Validate Register Input', 'Create Reddit Website']);
    const [title, setTitle] = useState('');
    let handleChange = (e)=>{
        setTitle(e.target.value)
    }
    
    let hSubmit = (e)=>{
        e.preventDefault();
        setTitle('');
        setData( [
            title,
            ...data
            ]
        )
    }

    const deleteTodo = (index) => {
        let tmp = [...data];
        tmp.splice(index, 1)
        setData(
            [
                ...tmp
            ]
        )
    }

    let toggleStatus = () => {
        
    }

    return (
        <div className='todos'>
            <form onSubmit={hSubmit}>
                <input name='title' placeholder='Enter Todo Here' value={title} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {data.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>
                            <input type='checkbox' checked={true}
                            onChange={toggleStatus} 
                            />{el}
                            </span>
                            <button onClick={ () => {
                            deleteTodo(index)
                            }}><i className="far fa-trash-alt"></i>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Todos;

