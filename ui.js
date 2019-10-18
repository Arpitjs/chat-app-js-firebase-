// 1 render chat templates to the dom
// 2 clear the lists of chats when room is switched

class ChatUI {
    constructor(list) {
        this.list = list
    }
    render(data) {
        let now = new Date().getTime()
        let dbDate = data.created_at.toMillis()
        let formatted = dateFns.distanceInWords(now, dbDate, { addSuffix: true } )
        let html = `<li class="list-group-item"><span class="username">${data.username} : </span><span class="message">${data.message}</span> 
        <div class="time">${formatted}</div></li>`
        this.list.innerHTML += html
    }
}   