import React from 'react'
import Sdata from './Sdata'

const Card = () => {
  return (
    <>
    {Sdata.map((data,ind)=>{
        return(
        <div  className="col">
            <div className="card mx-auto" style={{width: "15rem"}}>
                <img style={{height: "400px"}} src={`${data.img.src}`} className="card-img-top" alt={data.img.alt} />
                <div className="card-body">
                <h5 className="card-title">{`#${ind+1} - ${data.title} (${data.year})`}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Distributor: ${data.distributor}`}</li>
                <li className="list-group-item">{`Amount: ${data.amount}`}</li>
            </ul>
        </div>
    </div>
        )
    })}
    </>
  )
}

export default Card