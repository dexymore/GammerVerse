import React from 'react'

function SkelatonCards({ numberOfCards}) {

       ; // Change this number as needed

    const skeletonCards = [];
    for (let i = 0; i < numberOfCards; i++) {
        skeletonCards.push(
            <div key={i} className='col-md-4 rounded mt-5'>
                <div className="card bgcard card-outside rounded p-2">
                    <div>
                        <div className="image-container">
                            <div className='skelaton-cover skelaton'></div>
                        </div>
                        <div className="card-body card-title">
                            <h3 className="skelaton-text skelaton w-50"></h3>
                            <p className="skelaton-text skelaton w-75"></p>
                        </div>
                        <ul className="d-flex flex-column text-white justify-content-between firstulcard">
                            <li className="list-group-item mb-2 w-50 skelaton-text skelaton"></li>
                            <li className="list-group-item skelaton-text skelaton w-50"></li>
                        </ul>
                        <ul className="d-flex flex-row text-white justify-content-between secondulcard">
                            <li className="list-group-item skelaton-text skelaton w-75"></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

  return (<>
    {skeletonCards}</>
  )
}

export default SkelatonCards