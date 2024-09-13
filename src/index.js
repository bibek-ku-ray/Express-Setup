const express = require("express");
const apiRouter  = require("./routes")
const {serverConfig, logger} = require("./config")

const app = express();
console.log("Bibek ray");

app.use('/api', apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`server started running on ${serverConfig.PORT}`);
    logger.info("server running", {})
});
