"use client"
import React, { useState } from 'react';
import styles from "./ContactUsForm.module.css";

const ContactUsForm = () => {
    const apiUrl = 'http://localhost/wordpress/wp-json/bilal/v1/contact-form';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = { name, email, message };
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setEmail('');
                setMessage('');
                setName('');
                setResponseMessage(data.message);
            } else {
                throw new Error(data.message || 'There was an error submitting the form.');
            }
        } catch (error) {
            setResponseMessage(error.message);
        }
    };

    return (
        <div className={styles.contactForm}>
            <span className={styles.anyQuestion}>Any questions?</span>
            <h3 className={styles.contactHeading}>Let’s talk today!</h3>
            <form className={styles.contactFormContent} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    className={styles.input}
                    placeholder="Message"
                    cols={6}
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button className={styles.formBtn} type="submit">Submit</button>
            </form>
            {responseMessage && <p style={{ color: '#FFF' }}>{responseMessage}</p>}
        </div>
    );
};

export default ContactUsForm;
