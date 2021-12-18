import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
const Manager = () => {
    const {user} = useAuth();
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
        })
        e.preventDefault()
    }
    return (
        <div>
                <form onSubmit={handleAddMember}>
                    {
                        newMember.map((e, index) => (
                            <div key={index}>
                            <input name="name" required type="text" value={e.name} onChange={e => memberForm(e, index)} placeholder='name'/>
                            <input name="email" required type="email" value={e.email} onChange={e => memberForm(e, index)} placeholder="email"/> 
                            <button onClick={addField}>Add</button>
                            {newMember.length > 1 && 
                            <button onClick={() => removeField(index)}>Remove</button>
                            }
                            </div>
                        ))
                    }
                        <button type="submit">Submit</button>
                    </form>

        </div>
    );
};

export default Manager;