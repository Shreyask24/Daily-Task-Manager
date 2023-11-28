import { useState } from 'react';

// Importing Components
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header';
import Card from './Component/Card';
import './App.css';

function App() {
    const [add, setAdd] = useState(false);
    const [Tasks, setTasks] = useState([]);
    const [singleTask, setsingleTask] = useState('');
    const [singleDes, setsingleDes] = useState('');
    const [dropdown, setdropDown] = useState('');
    const [edit, setEdit] = useState('');



    const UpdateTask = (id) => {
        setTasks(Tasks.map((t) => (
            t.id == id ? { ...t, complete: true } : t
        )))
    }


    const deleteTask = (id) => {
        setTasks(Tasks.filter((t) => (
            t.id == id ? false : true
        )))
    }

    const ClearInput = () => {
        setsingleTask('');
        setsingleDes('');
    }


    const addToCart = () => {
        const id = Tasks.length == 0 ? 1 : Tasks.length + 1;
        const taskDetail = {
            id: id,
            task: singleTask,
            des: singleDes,
            complete: false,
            displayItem: dropdown
        }
        if (singleTask != "") {
            setTasks([...Tasks, taskDetail]);
        }
        else {
            alert("Task Field Empty!")
        }
    }

    const editTask = () => {
        const taskDetail = {
            task: singleTask,
            des: singleDes,
        }
        setEdit([...edit, taskDetail]);

        console.log(edit)
    }

    const handleCustomTask = (e) => {
        setsingleTask(e.target.value);
    }

    const handledropDown = (e) => {
        setdropDown(e.target.value);
    }

    const handleCustomDes = (e) => {
        setsingleDes(e.target.value);
    }

    const handleInput = () => {
        setAdd(!add);
    }

    return (
        <div className='main'>
            <div className='inputSection'>
                <Header handleInput={handleInput} />

                {
                    add == true ?
                        <>

                            <CustomInput value={singleTask} placeHolder='Enter Task' name='Task' change={handleCustomTask} />
                            <CustomInput value={singleDes} placeHolder='Enter Description' name='Description' change={handleCustomDes} />
                            <label for="Priority">Select Priority <br /></label>
                            <select className='dropdownMenu' defaultValue="Select" onChange={handledropDown} id='Priority'>
                                <option>Select</option>
                                <option>HIGH</option>
                                <option>MODERATE</option>
                                <option>LOW</option>
                            </select>
                            <div className='btnwrapper'>
                                <CustomButton color='White' bg='#1877F2' name='Save Task' click={addToCart} />
                                <CustomButton color='White' bg='red' name='Cancel' click={ClearInput} />
                            </div>
                        </> : null
                }



            </div>

            <div className='cardSection'>

                {
                    Tasks.map((t) =>
                    (
                        <Card title={t.task} des={t.des} key={t.id} delete={() => deleteTask(t.id)} update={() => UpdateTask(t.id)}
                            complete={t.complete} selectItems={t.displayItem} edit={() => editTask(t.id)} />

                    ))
                }
            </div>
        </div>
    );
}

export default App;