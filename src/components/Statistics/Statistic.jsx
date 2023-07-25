import PropTypes from 'prop-types';

export const Statistic = ({ title, stats }) => {
    return (
        <div>
 <span className="label">{title}</span>
 <span className="percentage">{stats}</span>
        </div>
    );
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.number.isRequired
}