"use strict";

exports.post = (req, resp, next) => {
  res.status(201).send(req.body);
};

exports.put = (req, resp, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body,
  });
};

exports.delete = (req, resp, next) => {
  res.status(200).send(req.body);
};
