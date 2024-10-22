export const testChap2 = () => {
    let a = 1 + 2;
    let b = a + 3;
    let c = {
        apple: a,
        banana: b
    };
    let d = c.apple * 4;
    let x: any = "Hello";
    let y = x + 5;

    console.log(x, y, d, c);

}