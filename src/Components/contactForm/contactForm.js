import React from 'react';
import styles from './contactForm.module.scss';

const ContactForm = () => (
  <div className={styles.ContactForm}>
    <h2>Me contacter</h2>
    <iframe title="Inline Frame Example"
            className={styles.ContactForm}
            src='https://guilianganstertypeform.typeform.com/to/D40eUdDj' ></iframe>
  </div>
)

export default ContactForm;