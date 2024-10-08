import { expect } from "chai";
import { tambah, kali } from "./math.js";

describe("Pengujian Fungsi Matematika (Kasus Negatif)", function () {
  // Kasus negatif untuk fungsi tambah
  it("seharusnya mengembalikan error saat menambahkan string '2' + 2", function () {
    expect(() => tambah("2", 2)).to.throw("Input harus berupa angka");
  });

  it("seharusnya mengembalikan error saat menambahkan null + 2", function () {
    expect(() => tambah(null, 2)).to.throw("Input harus berupa angka");
  });

  // Kasus negatif untuk fungsi kali
  it("seharusnya mengembalikan error saat mengalikan string '2' * 3", function () {
    expect(() => kali("2", 3)).to.throw("Input harus berupa angka");
  });

  it("seharusnya mengembalikan error saat mengalikan null * 3", function () {
    expect(() => kali(null, 3)).to.throw("Input harus berupa angka");
  });
});
