import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useDeposit from '../../../../../Hooks/useDeposit';
import useNetMember from '../../../../../Hooks/useNetMember';
import useToast from '../../../../../Hooks/useToast';
import Loading from '../../../../Shared/Loading/Loading';
import DepositLog from './DepositLog';
import DepositMoney from './DepositMoney';

const Deposit = () => {
    const {user, isLoading} = useAuth();
    const {toast} = useToast();
    const {setDeposit, deposit} = useDeposit(user.email)
    const {netMember} = useNetMember(user.email);
    const handleDepositMoney = (e, email, name) => {
        const depositAmmount = e.target[0].value
        const data = {
            email,
            name,
            network: user.email,
            money : parseInt(depositAmmount),
            date : new Date().toLocaleDateString()
        }
        const depositData = {
            email,
            money : parseInt(depositAmmount)
        }
        fetch('https://intense-inlet-54612.herokuapp.com/deposit',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                toast.fire({
                    icon:'success',
                    title:'Deposite Successfully!',
                    color: '#fff',
                    background: 'green',
                    iconColor: '#ffffff'
                })
                setDeposit([...deposit, data]);
                console.log(deposit);
            }
        })
        fetch('https://intense-inlet-54612.herokuapp.com/users/deposit',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(depositData)
        })
        e.preventDefault();
        }
        const handleDelete = (id) => {
            toast.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) =>{
                      if(result.isConfirmed){
                        const url = `https://intense-inlet-54612.herokuapp.com/deposits/${id}`
                      fetch(url, {
                        method:'DElETE'
                      })
                      .then(res => res.json())
                      .then(data => {
                          if(data.deletedCount){
                              const reamaining = deposit.filter(data => data._id !== id);
                              setDeposit(reamaining)
                              toast.fire({
                                  icon: 'success',
                                  iconColor: 'red',
                                  color: 'red',
                                  title: 'Successfully Deleted!'
                              })
                          }
                      })
                    }
              })
        }
        
        if(isLoading){
            return <Loading />
        }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <DepositMoney netMember={netMember} handleDepositMoney={handleDepositMoney} />
                </div>
                <div className="col-md-6">
                    <DepositLog handleDelete={handleDelete} deposit={deposit} />
                </div>
            </div>
        </div>
    );
};

export default Deposit;