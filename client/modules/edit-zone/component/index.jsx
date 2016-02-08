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

  deleteElement() {
    const {
      index,
      pageTitle,
      removeElement,
      FlowRouter
    } = this.props

    removeElement(name, pageTitle, index)
    FlowRouter.reload()
  }

  render() {
    const style = {
      containerStyle: {
        padding: 5,
        background: '#bada55'
      },
      delete: {
        float: 'right',
        background: 'red',
        border: 'none',
        marginTop: '-70px'
      }
    }

    const {elements} = this.props

    return (
      <div style={style.containerStyle}>
        <div>
          {elements.map((el, index) => <button
            onClick={this.addElementToPage.bind(this, el.componentName)}
            key={index}>{el.componentName}
          </button>)}
        </div>
        <button style={style.delete} onClick={this.deleteElement.bind(this)}> DELETE </button>
      </div>
    )
  }
}

export default EditZone
