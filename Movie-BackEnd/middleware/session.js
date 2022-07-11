const isSession = (req, res, next) => {
  if (!req.session.secret) {
    res.redirect("/admin");
    return;
  } else {
    next();
  }
};

module.exports = {
  isSession,
};
