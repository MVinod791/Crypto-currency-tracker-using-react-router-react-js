// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyDetails} = this.props
    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-notes-container">
          <div className="header-container">
            <p className="currency-type-heading">Currency Type</p>
            <div className="used-euro-value-container">
              <p className="usd-euro-value">USD</p>
              <p className="usd-euro-value">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrency-list">
            {currencyDetails.map(eachData => (
              <CryptocurrencyItem
                currencyDetails={eachData}
                key={eachData.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
