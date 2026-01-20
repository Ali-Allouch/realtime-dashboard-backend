import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  const secret = process.env.JWT_SECRET || "fallback_secret";
  const expiresIn = process.env.JWT_EXPIRE || "30d";

  return jwt.sign({ id }, secret, {
    expiresIn: expiresIn as jwt.SignOptions["expiresIn"],
  });
};

export default generateToken;
