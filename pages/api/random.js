import crypto from "crypto";

export default (req, res) => {
  const { size = "100" } = req.query;
  const randomLength = Number.parseInt(size, 10);

  if (Number.isNaN(randomLength)) {
    res.statusCode = 400;
    res.json({ error: "Invalid size parameter!" });
    return;
  }

  const randomHash = crypto.randomBytes(randomLength).toString("hex");

  res.statusCode = 200;
  res.json({ hash: randomHash });
};
