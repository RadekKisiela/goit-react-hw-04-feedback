import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={css.sectionWrapper}>
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </section>
    );
  }
}
Section.propTypes = { title: PropTypes.string.isRequired };

export default Section;
