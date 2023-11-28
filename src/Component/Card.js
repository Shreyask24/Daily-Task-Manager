import { useState } from 'react';
import '../App.css';
import CustomButton from './CustomButton';

function Card(props) {
    const [editContent, setContentEdit] = useState(false);

    const handleEdit = (e) => {
        setContentEdit(!editContent);
    }

    return (
        <div className='Card' style={{ backgroundColor: props.complete === true && ' gray', color: props.complete === true && 'white' }} >
            <h2 className='selectItems'> {props.selectItems} </h2>

            <h3 contentEditable={editContent}> {props.title} </h3>
            <p contentEditable={editContent}> {props.des}</p>



            <div className='btnwrapper'>
                <CustomButton color='White' bg='blue' name='Edit' click={handleEdit} />
                <CustomButton color='White' bg='#1877F2' name='Complete' click={props.update} />
                <CustomButton color='White' bg='red' name='Delete' click={props.delete} />
            </div>
        </div>
    );
}

export default Card;