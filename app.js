const express = require("express");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setTimeout(60000, function () {
    console.log("Request has timed out.");
    res.sendStatus(408);
  });
  next();
});

app.get("/getList", (req, res) => {
  console.log("getList");
  res.send(["First", "Second", "Third", "Fourth", "Fifth", "Sixth"]);
});

app.get("/fetchmin", (req, res) => {
  console.log("fetchmin");
  res.send({
    id: 1165,
    user_id: 2389,
    title:
      "Stillicidium crastinus super tepesco speciosus pariatur reprehenderit ulciscor unde angelus odio claro cumque.",
    body: "Anser utilis ut. Chirographum sulum adipisci. Appositus quis tredecim. Victoria cinis consequatur. Et ocer ultio. Spiculum carmen arbor. Apostolus conspergo solitudo. Tempora cresco ubi. Voveo vulgaris corpus. Spectaculum thema vomica. Abundans amicitia tendo. Fuga cogo desipio. Dolor tersus arcus. Congregatio utilis alii. Vomer caterva avarus. Deprecator vel arma. Thesaurus antiquus derideo. Et curriculum virgo.",
  });
});

app.listen(8080);
