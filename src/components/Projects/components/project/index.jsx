'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';

export default function index({ index, title, manageModal, link }) {
    const [isDevelopmentShown, setIsDevelopmentShown] = useState(false);

    return (
        <div
            onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY);
            }}
            onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
            }}
            className={styles.project}
        >
            <h2>{title}</h2>
            <p><a href={link}>Design & Development</a></p>
            
        </div>
    );
}
