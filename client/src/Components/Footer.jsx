import React from 'react'
import './Styles/Footer.css';
function Footer() {
    return (
        <div className='Footers'>
            <div class="footer">
                <div class="social-icons">
                    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <div class="footer-links">
                    <a href="#">Fraud Alert</a>
                    <a href="#">Feedback</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
