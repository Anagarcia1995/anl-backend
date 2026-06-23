const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    // NUEVO PASO
    if (password !== user.password) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign(
  {
    userId: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "30d",
  }
);

    res.status(200).json({
      message: "Login correcto",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const me = async (req, res) => {
  res.status(200).json({
    message: "Usuario autenticado",
    user: req.user,
  });
};

module.exports = { login, me };