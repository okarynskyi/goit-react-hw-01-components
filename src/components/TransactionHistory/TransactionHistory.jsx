import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    const data = items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ));

  return (
      <table className={css.transactionHistory}>
          <thead>
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
          </thead>
          <tbody>
            {data}  
          </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};