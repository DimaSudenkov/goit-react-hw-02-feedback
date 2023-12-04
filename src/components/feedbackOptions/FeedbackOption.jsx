import React from 'react'

const FeedbackOption = ({options, onLeaveFeedBack}) => {
  return (
    <div>
      {options.map((optionItem) => (
        <button key={optionItem} onClick={() => onLeaveFeedBack(optionItem)}>{optionItem}</button>))}
        {/* <button onClick={this.handlerClickGood}>{optionItem}</button> */}
    </div>
    )
}

export default FeedbackOption