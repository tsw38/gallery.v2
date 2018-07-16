export default async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    req.token = req.query.token;
  }
  next();
}
