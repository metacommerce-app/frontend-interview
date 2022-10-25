import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET": {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")

            if (response.status !== 200) return res.status(400).send("Could not fetch data...")

            const posts = response.data as { title: string }[]
            const { q } = req.query

            return res.status(200).send({ posts: posts.filter(post => post.title.includes(q as string)) })
        }
        case "PUT":
            return res.status(400).send("not implemented")
        case "POST":
            return res.status(400).send("not implemented")
        case "DELETE":
            return res.status(400).send("not implemented")
        default:
            return res.status(400).send("not implemented")
    }
}

export default handler