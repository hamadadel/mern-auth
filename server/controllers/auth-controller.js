async function signup(req, res) {
  try {
    return res.json({ message: 'api/v1/auth/signup' });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong', error });
  }
}

async function signin(req, res) {
  return res.json({ message: 'api/v1/auth/signin' });
}

module.exports = {
  signup,
  signin,
};
