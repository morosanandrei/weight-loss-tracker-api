const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

const port = 3000;

const options = {
    hostname: "eatthismuch.com",
    path: "/api/v1/weightentry/",
    method: "GET",
    headers: {
        cookie: "csrftoken=3PUvnN97MGDaI1hxZepztLwiQtq4vl1ucx1T0kK9tcYWf4jtSCOy2zryuVGbhnkK; sessionid=bqsnwjlywl6vp0odf4zo0n3ux0x5nkzn",
        Connection: "keep-alive",
    },
};

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/weightentry", async (req, res) => {
    const data = await getWeightEntry();
    console.log("made", data);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// const getWeightEntry = () => {
//     const async req = https.request(options, (res) => {
//         console.log(`statusCode: ${res.statusCode}`);
//         console.log(`res: ${res}`);
//         return res;
//     });
//     req.on("data", (d) => {
//         console.log(d);
//         return d;
//     });

//     req.on("error", (error) => {
//         console.error(error);
//     });

//     req.end();
// };

const getWeightEntry = async () => {
    console.clear();
    let data;
    await axios
        .get("http://eatthismuch.com/api/v1/weightentry", {
            headers: {
                Cookie: "csrftoken=3PUvnN97MGDaI1hxZepztLwiQtq4vl1ucx1T0kK9tcYWf4jtSCOy2zryuVGbhnkK; sessionid=bqsnwjlywl6vp0odf4zo0n3ux0x5nkzn",
            },
        })
        .then((res) => {
            console.log("res", res.data);
            data = res.data;
        })
        .catch((err) => console.log(err));

    return data;
};
