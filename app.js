//dom stuff
let chatList = document.querySelector('.chat-list')
let newChatForm = document.querySelector('.new-chat')
let newNameForm = document.querySelector('.new-name')
let updateMsg = document.querySelector('.update-mssg')

newChatForm.addEventListener('submit', e => {
        e.preventDefault()
        let msg = newChatForm.message.value.trim()
        chatroom.addChat(msg)
        newChatForm.reset()
})

newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    let newName = newNameForm.name.value.trim()
    chatroom.updateUsername(newName)
    newNameForm.reset()
    updateMsg.innerText = `Your name was updated to: ${newName}`
    setTimeout(() => updateMsg.innerText = '', 5000)
})

//check local storage for a name
let username = localStorage.username ? localStorage.username : ''
//application starts loading here.
//class instances.
let chatUI = new ChatUI(chatList)
let chatroom = new Chatroom('gaming', username)
//get chats and render.
chatroom.getChats(function (data) {
    chatUI.render(data)
})