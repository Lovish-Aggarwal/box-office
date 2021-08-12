/* eslint-disable no-unused-vars */
import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    const { id } = useParams();
    const [show,setShow]=useState(null);
    // eslint-disable-next-line


    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
            setShow(results);
        });

    },[id])

    // eslint-disable-next-line
    console.log('show',show);

    return (
        <div>
            This is Show Page.
        </div>
    )
}

export default Show
