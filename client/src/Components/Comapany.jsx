import React, { useEffect, useRef } from 'react';
import './Styles/Company.css';
import cardData from './Json/Category.json';

function CompanyCategory() {
    const rowRef = useRef(null);
    const cardWidth = 500;

    useEffect(() => {
        const scroll = () => {
            if (rowRef.current) {
                const { scrollLeft, clientWidth } = rowRef.current;
                rowRef.current.scrollLeft += cardWidth * 1;

                if (scrollLeft >= rowRef.current.scrollWidth - clientWidth) {
                    rowRef.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scroll, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='CompanyCategory'>
            <div>
                <h2>Companies offering jobs in various Categories</h2>
            </div>
            <div className='container'>
                <div ref={rowRef} className="row flex-nowrap " style={{ overflowX: 'hidden' }}>
                    {cardData.map((card, cardIndex) => (
                        <div key={cardIndex} className="card">
                            <div className="card-content">
                                <p className="card-title">{card.title}</p>
                                <div className="card-body">
                                    {card.companies.map((company, index) => (
                                        <span key={index} className="badge badge-primary">{company}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

function Company() {
    return (
        <div>
            <CompanyCategory />
        </div>
    );
}

export default Company;
