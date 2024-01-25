import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { _id: string; fullName: string; email: string },
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn,
  });
  return token;
};
