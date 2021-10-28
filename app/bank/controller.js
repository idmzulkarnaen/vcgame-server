const Bank = require('./model')

module.exports={
  index: async(req, res)=>{
    try {
      const alertMessage = req.flash("alertMessage")
      const alertStatus = req.flash("alertStatus")

      const alert = { message: alertMessage, status: alertStatus}
      const bank = await Bank.find()

      console.log("bank>>>>")
      console.log(bank)

      res.render('admin/bank/view_bank',{
        bank,
        alert
      })
    } catch (err) {
      req.flash('alertMessage', `${err.message}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/bank')
      
    }
  },

  viewCreate : async(req, res)=>{
    try {
      res.render('admin/bank/create',{        
      })
    } catch (err) {
      req.flash('alertMessage', `${err.message}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/bank')
    }
  },

  actionCreate : async(req, res)=>{
    try {
      const { name, bankName, noRekening } = req.body

      let bank = await Bank({ name, bankName, noRekening })
      await bank.save();

      req.flash('alertMessage', "Berhasil tambah bank")
      req.flash('alertStatus', "success")

      res.redirect('/bank')
      
    } catch (err) {
      req.flash('alertMessage', `${err.message}`)
      req.flash('alertStatus', 'danger')
      res.redirect('/bank')
    }
  },

  
}