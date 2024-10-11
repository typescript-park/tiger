import crypto from "crypto";

const Crypto = {
  /**
   * 计算 MD5 哈希值。
   * @param {string} message - 要计算哈希值的字符串。
   * @returns {string} 计算后的 MD5 哈希值，32 位小写十六进制字符串。
   */
  md5(message: string): string {
    return crypto.createHash("md5").update(message).digest("hex");
  },

  /**
   * 计算 SHA256 哈希值。
   * @param {string} message - 要计算哈希值的字符串。
   * @returns {string} 计算后的 SHA256 哈希值，64 位小写十六进制字符串。
   */
  sha256(message: string): string {
    return crypto.createHash("sha256").update(message).digest("hex");
  },
};

export default Crypto;
