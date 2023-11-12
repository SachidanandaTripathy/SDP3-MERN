import React, { useState, useRef, useEffect } from 'react';
import './Styles/Company.css';
import cardData from './Json/Category.json';
import companies from './Json/Companies.json'
import Pagination from "react-js-pagination";

function Companies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const companiesPerPage = 7;

    const filteredCompanies = companies.filter(company =>
        company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <input
                    type="text"
                    placeholder="Search by company name"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{
                        padding: '10px',
                        width: '300px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
            </div>
            <div className="companies">
                {currentCompanies.map((company, index) => (
                    <div key={index} className="company-card">
                        <div className="company-card-header">
                            <h3>{company.companyName}</h3>
                        </div>
                        <div className="company-card-body">
                            <p>Review: {company.review}</p>
                            <p>Rating: {company.rating}</p>
                            <button>View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={companiesPerPage}
                    totalItemsCount={filteredCompanies.length}
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
