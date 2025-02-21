import Input from './Input.jsx'
import {useRef} from 'react';

import Modal from './Modal.jsx';

export default function NewProject ({onAdd, onCancel}){
    const title =useRef();
    const description = useRef();
    const date = useRef();

    const modal = useRef();


    function handleSave(){
        const enteredTitle= title.current.value;
        const enteredDescription= description.current.value;
        const enteredDate= date.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim()==='' || enteredDate.trim() === ''){
            modal.current.open();
            return;
        }
        onAdd(
            {title:enteredTitle,
                description:enteredDescription,
                date:enteredDate
            } 
        );

    }


    return(
    <>
    <Modal ref={modal} buttonCaption="close"> 
    <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
    <p className='mb-4 text-stone-400'>opps ... looks like you forget t enter a value</p>
    <p className='mb-4 text-stone-400'>please make sure you provide a value to each input field</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>cancel</button>
            </li>
            <li>
                <button onClick={handleSave}  className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-slate-950'>
                    save
                </button>
            </li>
        </menu>
        <div>
            <Input ref={title} label="title"/>
            <Input ref={description} label="description" textarea/>
            <Input type="date" ref={date} label="due date"/>
        </div>
    </div>
    </>
    );
}