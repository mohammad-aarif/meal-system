import { TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';
const Manager = () => {
    const {user, isLoading} = useAuth();
    const memberTemplate = {name: "", email: ""}
    const [newMember, setNewMember] = useState([memberTemplate])
    const addField = () => {
        setNewMember([...newMember, memberTemplate])
    }
    const removeField = (index) => {
        const member = [...newMember]
        member.splice( index, 1 )
        // console.log(index)
        setNewMember(member)
    }
    const memberForm = (e, index) => {
        const key = e.target.name;
        const value = e.target.value;
        const member = [...newMember];
        member[index][key] = value;
        member[index]['networkInfo'] = {
            network: user.email,
            role: 'member',
            networkMemberSince: new Date()
        };
        setNewMember(member)
    }
    const handleAddMember = e => {
        console.log(newMember);
        newMember.forEach(data => {
            console.log(data);
            fetch('https://intense-inlet-54612.herokuapp.com/users', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        })
        e.preventDefault()
    }
    if(isLoading){
        return <Loading />
    }
    return (
        <div className='width-35 mx-auto py-5'>
                <form onSubmit={handleAddMember}>
                    {
                        newMember.map((e, index) => (
                            <div key={index}>
                            {/* <input name="name" required type="text" value={e.name} onChange={e => memberForm(e, index)} placeholder='name'/> */}
                            <TextField 
                            className="mb-2"
                            label="Name"
                            onChange={e => memberForm(e, index)}
                            name='name'
                            color="warning"
                            variant="standard"
                            />
                            <TextField 
                            className="mb-2 ms-3"
                            label="Email"
                            onChange={e => memberForm(e, index)}
                            name='email'
                            type='email'
                            color="warning"
                            value={e.email}
                            variant="standard"
                            />
                            {/* <input name="email" required type="email" value={e.email} onChange={e => memberForm(e, index)} placeholder="email"/>  */}
                            {newMember.length > 1 && 
                            <button className='btn-skull remove-btn ms-3 m-2' onClick={() => removeField(index)}>Remove</button>
                            }
                            </div>
                        ))
                    }
                        <button type="submit" className='general-btn mt-3'>Submit</button> <button className='btn-skull ms-2 mt-3 total-deposit' onClick={addField}>Add</button>
                    </form>

        </div>
    );
};

export default Manager;