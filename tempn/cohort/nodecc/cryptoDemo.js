import crypto from "crypto";

// createHash()

const hash = crypto.createHash("sha256");
hash.update("password123");

console.log(hash.digest("hex"));
