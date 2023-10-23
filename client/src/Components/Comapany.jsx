import React, { useState, useRef, useEffect } from 'react';
import './Styles/Company.css';
import cardData from './Json/Category.json';
import companies from './Json/Companies.json'
import Pagination from "react-js-pagination";

function Companies() {
    const [currentPage, setCurrentPage] = useState(1);
    const companiesPerPage = 7;
    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="companies">
                {currentCompanies.map((company, index) => (
                    <div key={index} className="company-card">
                        <div className="company-card-header">
                            <h3>{company.companyName}</h3>
                        </div>
                        <div className="company-card-body">
                            <p>Review: 5</p>
                            <p>Rating: nice</p>
                            <button>View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={companiesPerPage}
                    totalItemsCount={companies.length}
                    pageRangeDisplayed={7}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="active"
                />
            </div>
        </>

    );
}



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
            <h2 style={{display:"flex",justifyContent:"center",padding:"10px"}}>Companies Actively Hiring</h2>
            <hr/>
            <Companies />
        </div>
    );
}

export default Company;
