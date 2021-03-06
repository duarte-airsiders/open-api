module.exports = function (
  /* I can inject the parameters in any order */ injected2,
  injected1 /* and add comments */
) {
  var doc = {
    get: function (req, res, next) {
      res.status(200).send('boo');
    },
  };
  doc.get.apiDoc = {
    description: injected1.description,
    operationId: 'getBoo',
    parameters: [],
    responses: {
      200: {
        description: injected2.description,
        schema: {
          type: 'string',
        },
      },
    },
  };
  return doc;
};
