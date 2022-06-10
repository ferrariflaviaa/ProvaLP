import { useState } from 'react'
import CardReceitas from '../CardReceitas';
import api from '../services/index'

//Questão 1;
export default function Home() {
    const [receita, setReceita] = useState();
    const[listValor,setListValor] = useState();

    async function HomeReceita() {
        await api
            .post(`/signup`)
            .then((data) => {
                setReceita(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    

    return (
        <div>
            <input type="text"/>
            <input type="submit"/>

            <CardReceitas/>
        </div>
    )
}

