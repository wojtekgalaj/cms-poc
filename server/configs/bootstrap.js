import {Pages} from '/libs/collections'

export default function () {
  if (!Pages.findOne()) {
    Pages.insert({
      elements: [

      ]
    })
  }
}
