const bcrypt = require("bcryptjs")

const password = "TU_PASSWORD_ACTUAL"

const hashPassword = async () => {
  const hash = await bcrypt.hash(password, 10)
  console.log(hash)
}

hashPassword()