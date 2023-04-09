import React, { useEffect, useState } from 'react'
import SingleData from './component/singleData';
import Form from './component/form';
export default function App() {
    let url = "http://localhost:4000/users"

    const [allUser, setallUser] = useState([]);
    const [isUpdatedFlag, setisUpdatedFlag] = useState(false);
    const [selectedUser, setselectedUser] = useState([]);
    const [selectedUserID, setselectedUserID] = useState("");
    const [filtereduser, setfiltereduser] = useState({});


    // getting data

    let getAllUser = () => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setallUser(res)
            })
            .catch((Error) => {
                console.log(Error)
            })
    }

    useEffect(() => {
        getAllUser()
    }, []);




    // create user
    let handleAddData = (newUser) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Data cannot be created")
                }
                getAllUser()
            })
    }




    // delete data
    
    let handleDelete = (id) => {
        fetch(url + `/${id}`, {
            method: 'DELETE',
        })   
        .then((res) => {
            if (!res.ok) {
              throw Error("could not delete");
            }
            getAllUser()
          })
          .catch((err) => {
            console.log(err)
          });
    }

    let handleEditData = (id) => {
        let filteredData = allUser.filter((data) => data._id == id)[0]
        setselectedUser({
            name: filteredData.name,
            email: filteredData.email,
            password: filteredData.password
        })
        setisUpdatedFlag(true)
        setselectedUserID(id)
    }

    // updatedata
    let onhandleEditData = (user) => {
        fetch(url+`/${selectedUserID}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res)=>{
            if(!res.ok)
            {
                throw Error("data cannot be updated")
            }
            getAllUser()
            setisUpdatedFlag(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    return (
        <div >
            <h1>User Management data</h1>

            {
                isUpdatedFlag ? <Form btn={"Update User"} selectedUser={selectedUser} onHandleData={onhandleEditData} /> : <Form btn={"Add user"} onHandleData={handleAddData} />
            }


            <div className='allUsers'>
                {
                    allUser.map((data) => {
                        return <SingleData key={data._id} user={data} onDeleteData={handleDelete} onEditData={handleEditData} />
                    })
                }
            </div>
        </div>
    )
}
