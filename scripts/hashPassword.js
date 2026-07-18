const bcrypt = require("bcryptjs")

const password = process.argv[2]

if (!password) {
  console.log("Uso: node src/scripts/hashPassword.js <contraseña>")
  process.exit(1)
}

const hashPassword = async () => {
  const hash = await bcrypt.hash(password, 10)
  console.log(hash)
}

hashPassword()