import React from 'react';

class EditZone extends React.Component {

  addElementToPage(name) {
    const {
      index,
      pageTitle,
      order,
      addElement,
      FlowRouter
    } = this.props

    addElement(name, pageTitle, index, order)
    FlowRouter.reload()
  }


  render() {
    const containerStyle = {
      padding: 5,
      background: '#bada55'
    };

    const {elements} = this.props

    return (
      <div style={containerStyle}>
        <div>
          {elements.map((el, index) => <button
            onClick={this.addElementToPage.bind(this, el.componentName)}
            key={index}>{el.componentName}
          </button>)}
        </div>
      </div>
    )
  }
}

export default EditZone
