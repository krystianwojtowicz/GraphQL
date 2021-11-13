import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'

const app = express()

app.get("/", (req, res) => {
    res.send("up and runnnind with graphql crash course")
})

// const root = {lco: () => console.log('LearnCodeOnline.in')}
const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true
}))

app.listen(8082, () => console.log("Running at 8082"))