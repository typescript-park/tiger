import Crypto from "../src/crypto";

describe("crypto", () => {
  it("md5", () => {
    expect(Crypto.md5("hello")).toBe("5d41402abc4b2a76b9719d911017c592");
  });

  it("sha256", () => {
    expect(Crypto.sha256("hello")).toBe(
      "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
    );
  });
});
