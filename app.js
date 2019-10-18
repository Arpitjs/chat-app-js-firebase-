//dom stuff
let chatList = document.querySelector('.chat-list')
let newChatForm = document.querySelector('.new-chat')
let newNameForm = document.querySelector('.new-name')
let updateMsg = document.querySelector('.update-mssg')
let roomDiv = document.querySelector('.chat-rooms')

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

roomDiv.addEventListener('click', e => {
    //  console.log(e.target)
     if(e.target.tagName === 'BUTTON'){
         chatUI.clear()
         chatroom.updateRoom(e.target.getAttribute('id'))
         chatroom.getChats(function(chat) {
             chatUI.render(chat)
         })
     }
})

//check local storage for a name
let username = localStorage.username ? localStorage.username : ''
//application starts loading here.
//class instances.
let chatUI = new ChatUI(chatList)
let chatroom = new Chatroom('general', username)
//get chats and render.
chatroom.getChats(function (data) {
    chatUI.render(data)
})