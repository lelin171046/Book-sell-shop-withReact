import React, { useEffect, useState } from 'react';

import ReadPage from '../../Pages/ReadPage';
import { useLoaderData } from 'react-router-dom';

const Chartdata = () => {

    const datas = useLoaderData();
    console.log(datas);
//    const [cdata, setCdata] = useState([])
//    useEffect(()=>{
//     fetch('bookList.json')
//     .then(res => res.json())
//     .then(data => setCdata(data))
//    },[]);
//    console.log(cdata);
    return (
        <div>
            {
                // cdata.map(cdata => <ReadPage data={cdata} key={cdata.id}></ReadPage>)
                datas.map(data=> <ReadPage data={data} key={data.id}></ReadPage>)
            }
        </div>
    );
};

export default Chartdata;