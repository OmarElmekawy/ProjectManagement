import noProjectImg from '../assets/no-projects.png';
import Button from './Button.jsx'

export default function NoProjectSelected ({onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImg} alt="an empty task list" className='h-16 w-16 mx-auto object-contain' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project selected</h2>
            <p className='mb-4 text-stone-400'>select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>create a new project</Button>
            </p>
        </div>
    )
}