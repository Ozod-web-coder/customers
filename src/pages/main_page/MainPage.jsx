import './MainPage.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../../components/Card.jsx";



export default function MainPage(){
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [apiUrl, setApiUrl] = useState('http://localhost:8000/customers/')

    useEffect(() => {
        axios.get('http://localhost:8000/customers')
            .then(res => {
                console.log(res.data)
                setData(res.data.results)
            })
            .catch(err => {
                console.error('Ошибка при запросе:', err)
            })
    }, [])


    useEffect(() => {
        axios.get(`${apiUrl}?page=${page}`)
            .then(res => {
                setData(res.data.results)
            })
            .catch(err => {
                console.error('Ошибка при запросе:', err)
            })
    }, [apiUrl, page])


    function nextPage() {
        setPage(prev => prev + 1)
    }


    function prevPage() {
        setPage(prev => (prev > 1 ? prev - 1 : 1))
    }

    function ByName() {
        setApiUrl('http://localhost:8000/customers/by_name/')
        setPage(1)
    }

    function OnlyActive() {
        setApiUrl('http://localhost:8000/customers/only_active/')
        setPage(1)
    }

    function OnlyInactive() {
        setApiUrl('http://localhost:8000/customers/only_inactive/')
        setPage(1)
    }

    function ByDate() {
        setApiUrl('http://localhost:8000/customers/by_date/')
        setPage(1)
    }
    return (
        <>
        <div className="main_page">
            <div className='menu'>
                <div className='object_menu' onClick={ByName}>
                    Order by Name
                </div>
                <div className='object_menu' onClick={OnlyActive}>
                    only active
                </div>
                <div className='object_menu' onClick={OnlyInactive}>
                    only inactive
                </div>
                <div className='object_menu' onClick={ByDate}>
                    Order by Date
                </div>
            </div>
            <div className='top_bar'>
                <div>
                    ФИО
                </div>
                <div>
                    ИНН
                </div>
                <div>
                    Статус
                </div>
                <div>
                    Дата регистрации
                </div>
            </div>
            <div className='card_list'>
                {data.map(item => <Card item={item}/>)}
            </div>
            <div className='bottom_bar'>
                <div className='pagination'>
                    <div onClick={prevPage}>
                        &lt;
                    </div>
                    <div>
                        {page}
                    </div>
                    <div onClick={nextPage}>
                        &gt;
                    </div>
                </div>

            </div>
        </div>


        </>
    )
}