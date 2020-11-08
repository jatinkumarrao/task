const {calaculatetip,fahrenheitToCelsius,celsiusToFahrenheit,add}= require("../src/math")
test("Should calculate total with tip",()=>{
    const total=calaculatetip(10,.25)
    expect(total).toBe(12.5)

})
test("Should calculate total with default tip",()=>{
    const total=calaculatetip(10)
    expect(total).toBe(14.5)

})
test("Should convert 32 F to 0 C",()=>{
    const temp=fahrenheitToCelsius(32)
    expect(temp).toBe(0)

})
test("Should convert 0 C to 32 F",()=>{
    const temp=celsiusToFahrenheit(0)
    expect(temp).toBe(32)

})
test("Using done",(done)=>{

    add(2,3).then((value)=>{
        expect(value).toBe(5)
        done()
    })
})
test("Using async",async()=>{
    const sum= await add(2,3)
        expect(sum).toBe(5)

})