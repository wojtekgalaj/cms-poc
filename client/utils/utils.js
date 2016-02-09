const ElementUtils = (() => {

  return {
    fillInTheBlanks(data) {
      Object.keys(data).forEach((key) => {
        data[key] = data[key] === '' ? 'placeholder' : data[key]
      })
      return data
    },

    prepareDataFromRefs(refs, refCR) {
      let elementData = Object.keys(refs).reduce((memo, item) => {
        memo[item] = refs[item][refCR]
        return memo
      }, {})

      return elementData
    },

    updatePageModel(props, refs, elementName) {
      const {Session} = props
      let {data} = props
      const pageModel = Session.get('currentPage')
      const refCR = data.edit ? 'value' : 'textContent'

      let elementData = this.prepareDataFromRefs(refs, refCR)
      data = Object.assign({}, data, ElementUtils.fillInTheBlanks(elementData))

      pageModel.elements[data.positionOnPage] = {
        component: elementName,
        data: elementData
      }

      Session.set('currentPage', pageModel)
    }
  }
})()

export default ElementUtils
