import PropTypes from 'prop-types';
import { Statistic } from './Statistic';
import { StatsTitle } from './StatsTitle'

export const StatisticsList = ({ items }) => {
    return (
        <ul className="stat-list">
            <StatsTitle title="Upload stats" />
            {items.map(({id, label, percentage}) => {
                return (
                    <li key={id}>
                        <Statistic
                            title={label}
                            stats={percentage}
                        />
                    </li>
                )
              
            })}
        </ul>
    )
};

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
          PropTypes.shape({
          id: PropTypes.string.isRequired
        })
    )
}