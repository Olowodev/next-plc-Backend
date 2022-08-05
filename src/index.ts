import express,{Express, Request, Response} from 'express'
import fetch from 'node-fetch';
import {Response as fetchResponse, FetchError} from 'node-fetch'


const app: Express = express();
const port = 8000;

app.get('/', async (req: Request, res: Response) => {

    const url = `https://itunes.apple.com/search?term=${req.query.searchTerm}`;
    const options = {
        "method": "GET"
    }

    const response = await fetch(url, options)
        .then((res: fetchResponse) => res.json())
        .catch((e: FetchError) => {
            console.error({
                error: e
            })
        })
    res.json(response.results)

})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

