import './index.css'

const TabsList = props => {
  const {tabsList, activeTab, changeActiveTab} = props
  const {tabId, displayText} = tabsList
  const buttonTrigger = () => {
    changeActiveTab(tabId)
  }
  const bordercolor = activeTab === tabId ? 'activeBorder' : null
  const color = activeTab === tabId ? 'activecolor' : null
  return (
    <li className={`tablistItems ${bordercolor}`}>
      <button
        type="button"
        onClick={buttonTrigger}
        className={`tablistbtn ${color}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
