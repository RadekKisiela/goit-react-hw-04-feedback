import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.sectionWrapper}>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = { title: PropTypes.string.isRequired };

export default Section;
