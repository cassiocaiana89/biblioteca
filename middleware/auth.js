module.exports = (req, res, next) => {
  if (req.session.logado) {
    next();
  } else {
    res.redirect("/page/login");
  }
};
