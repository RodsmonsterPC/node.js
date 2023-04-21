import bcrypt from "bcrypt";

const saltRounds = 10;

const hash = (plainText) => {
  return bcrypt.hash(plainText, saltRounds);
};

/**
 * bcrypt : {
 *
 * hash: function()
 * compareSync: function()
 * ....
 * }
 */
export default {
  ...bcrypt,
  hash,
};
