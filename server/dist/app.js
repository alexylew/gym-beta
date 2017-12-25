"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.use('/', (req, res, next) => res.json({ status: 'up' }));
app.listen(5001, () => {
    console.log('App is running at port 5001');
});
exports.default = app;
//# sourceMappingURL=app.js.map