import React from 'react';
import '../assets/styles/components/Categories.css';

const Categories = ({ children }) => (
    <div className="categories">
        <h3 className="categories__title">Hola</h3>
        {children}
    </div>
);

export default Categories;