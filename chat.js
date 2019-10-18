//1 add new chat documents
//2 set up real time listeners to get new chat
//3 update the username
//4 update the room

class Chatroom {
    constructor(room, username) {
        this.room = room
        this.username = username
        this.database = db.collection('chats')
        this.unsub
    }
    // 1
    async addChat(message) {
        //format chat object
        const now = new Date()
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save chat to db
        const response = await this.database.add(chat)
        return response
    }
    // 2
    getChats(callback) {
        this.unsub = this.database
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    // console.log(snapshot.docChanges())
                    if (change.type === 'added') {
                        //callback later will the data. return also works in this case.
                        callback(change.doc.data())
                    }
                })
            })
    }
    // 3
    updateUsername(newName) {
        this.username = newName
    }
    // 4
    updateRoom(newRoom) {
        this.room = newRoom
        console.log('room updated')
        if(this.unsub)
        this.unsub()
    }
}

// setTimeout(() => {
// chatroom.updateRoom('killing people')
// chatroom.updateUsername('binladin')
// chatroom.getChats(function(data) {
//     console.log(data)
// })
// chatroom.addChat('allahu akbar')
// },4000)