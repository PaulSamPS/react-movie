import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer className="page-footer teal lighten-1">
            <div className="footer-copyright">
                <div className="container">
                    © { new Date().getFullYear() } Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://PaulSamPS.github.io/react-movie">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer