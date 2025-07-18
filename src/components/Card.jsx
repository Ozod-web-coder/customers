import './Card.css'

export default function Card({item}) {
    console.log(item)
    return (
        <div className='card'>
            <div>
                {item.name}
            </div>
            <div>
                {item.INN}
            </div>
            <div>
                {item.status}
            </div>
            <div>
                {item.created_at}
            </div>
        </div>
    )
}