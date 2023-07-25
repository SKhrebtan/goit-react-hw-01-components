import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from '../../js/colorRanomizer';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.section}>
            {(title && title.length > 0) && (<h2 className={css.title}>{title}</h2>)}

            <ul className={css.list}>
                {stats.map(stat => {
                    return (
                    <li className={css.item} key={stat.id} style={{
         backgroundColor: getRandomHexColor(),
          }}>
      <span className={css.span}>{stat.label}</span>
      <span className={css.span}>{stat.percentage}%</span>
                    </li>
                    )
                    })}
              </ul>
</section>
    )   
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              percentage: PropTypes.number.isRequired,
        }))
}

