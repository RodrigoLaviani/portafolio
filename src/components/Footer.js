import React from 'react';
import '../assets/styles/components/Footer.scss'
import Link from './Link';
import contacts from '../data/footer.json'

const Footer = () => {
    return (
        <footer className="footer">
            {
                (contacts || []).map(contact => <Link key={contact.id} icon={contact.icon} name={contact.name} url={contact.url}></Link>)
            }
        </footer>
    );
};


export default Footer;