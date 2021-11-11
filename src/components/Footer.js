import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center bg-light w-100 mt-5">
            <p>© {year} All Rights Reserved Paailatechnologies</p>
        </footer>
    )
}

export default Footer
