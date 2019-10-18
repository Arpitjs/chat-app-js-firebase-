//dom stuff
let chatList = document.querySelector('.chat-list')
let newChatForm = document.querySelector('.new-chat')

newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    let msg = newChatForm.message.value.trim()
    chatroom.addChat(msg)
    newChatForm.reset()
})

//class instances.
let chatUI = new ChatUI(chatList)
let chatroom = new Chatroom('gaming', 'arpitjs')

//get chats and render.
chatroom.getChats(function (data) {
    chatUI.render(data)
})