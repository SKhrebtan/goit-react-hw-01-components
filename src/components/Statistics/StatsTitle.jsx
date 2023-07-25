import PropTypes from 'prop-types';

export const StatsTitle = ({ title }) => {
      return <h2>{title}</h2>;
}

StatsTitle.propTypes = {
    title: PropTypes.string
}