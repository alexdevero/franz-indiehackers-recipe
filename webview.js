module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.title-bar__content .title-bar__user-link .title-bar__unread-count').length
    let numOfMessages = 0

    if (directMessages > 0) {
      numOfMessages = parseInt(document.querySelector('.title-bar__content .title-bar__user-link .title-bar__unread-count').innerText)
    }

    Franz.setBadge(numOfMessages)
  }

  Franz.loop(getMessages)
}
