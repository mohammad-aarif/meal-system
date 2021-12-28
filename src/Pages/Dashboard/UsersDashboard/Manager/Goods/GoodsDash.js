import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import Loading from '../../../../Shared/Loading/Loading';
import BuyGoods from './BuyGoods';
import GoodsLog from './GoodsLog';
import useToast from '../../../../../Hooks/useToast'
const GoodsDash = () => {
    const {user, isLoading} = useAuth()
    const [market, setMarket] = useState([])
    const [goodsData, setGoodsData] = useState({});
    const {toast} = useToast()
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/goods/${user.email}`)
        .then(res => res.json())
        .then(data => setMarket(data))
    }, [user.email])

    const takeGoodsData = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = {...goodsData}
        newValue[key] = value;
        setGoodsData(newValue)
    }
    const handleDepositMoney = (e) => {
        // console.log(goodsData);
        // const whoDid = e.target[0].value;
        // const goods = e.target[1].value;
        // const money = e.target[2].value;
        const money = goodsData.money
        const goods = goodsData.goods
        const whoDid = goodsData.whoDid
        const data = {
            network: user.email,
            whoDid: whoDid,
            goods : goods,
            money : parseInt(money),
            date : new Date().toLocaleDateString()
        }
        const depositData = {
            email: user.email,
            goodsCost : parseInt(money)
        }
        fetch('https://intense-inlet-54612.herokuapp.com/cost',{
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
                    icon: 'success',
                    title: 'Goods Added Succefully'
                })
                setMarket([...market, data])
            }
        })
        fetch('https://intense-inlet-54612.herokuapp.com/users/cost',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(depositData)
        })
        console.log(data, depositData);
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
                        const url = `http://localhost:3002/goods/${id}`
                      fetch(url, {
                        method:'DElETE'
                      })
                      .then(res => res.json())
                      .then(data => {
                          if(data.deletedCount){
                              const reamaining = market.filter(data => data._id !== id);
                              setMarket(reamaining)
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
        return <Loading/>
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <BuyGoods takeGoodsData={takeGoodsData} handleDepositMoney={handleDepositMoney} />
                </div>
                <div className="col-md-6">
                    <GoodsLog market={market} handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
    );
};

export default GoodsDash;