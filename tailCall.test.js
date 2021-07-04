const recursiveFactorial  = require("./tailCall");
test("returns the factorial of 10", () => {
    expect(recursiveFactorial(10)).toBe(3628800);
});


