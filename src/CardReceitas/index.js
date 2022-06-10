import React, { useState, useEffect } from 'react'
import api from '../services/index'

//Questão 2:
export default function CardReceitas() {

    const [list, setList] = useState(0);

    async function listReceita() {
        await api
          .get(`/?limit=4`)
          .then((data) => {
            setList(data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      useEffect(() => {
        list;
      }, []);

    

    
  return (
    <div>
        <imput valeu={listReceita} />
    </div>
  )
}
