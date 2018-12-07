/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
function validateEmail(email) {
  // console.log('email!!!', email);
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

exports.validateRequiredKeys = function(body, fields, res, callback) {
  let key = '';
  let name = '';
  let errorField = '';
  let value = '';

  // Traversing through the required fields
  for (let i = 0; i < fields.length; i += 1) {
    key = fields[i].key;
    name = fields[i].name;
    errorField = '';
    value = `${body[key]}`;

    // if request body does not contain respective field then throw error
    if (
      value === undefined ||
      value === 'undefined' ||
      value === null ||
      !value ||
      value.replace(/\s+/g, '') === ''
    ) {
      errorField = `${name} is required.`;

      break;
    } else if (key === 'email' && !validateEmail(value)) {
      errorField = 'Wrong email address.';
      break;
    }
  }
  if (errorField) {
    res.statusCode = 404;
    res.json({
      status: 404,
      message: errorField,
    });
    res.end();
    callback(errorField);
  } else {
    callback(errorField);
  }
};
