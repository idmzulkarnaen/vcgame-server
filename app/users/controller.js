// const User = require('./model')
// const bcrypt = require('bcryptjs')


module.exports = {
  viewSignin: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage")
      const alertStatus = req.flash("alertStatus")

      const alert = { message: alertMessage, status: alertStatus }
      if (req.session.user === null || req.session.user === undefined) {
        res.render('admin/users/view_signin', {
          alert
        })
      } else {
        res.redirect('/dashboard')
      }
    } catch (err) {
      req.flash('alertMessage', `${err.message}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/')

    }
  },
}