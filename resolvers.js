import {nanoid} from 'nanoid'

class Course {
    constructor(id, {name, email
    }){
        this.id = id
        this.name = name
        this.email = email
    }
}

const userholder = {}

const resolvers = {
    getUser : ({ id }) => {
        return new User(id, userholder[id])
    },
    createUser: ({ input }) => {
        let id = nanoid()
        userholder[id] = input
        return new User(id, input)
    }
}

export default resolvers