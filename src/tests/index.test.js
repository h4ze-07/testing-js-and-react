import { describe, test, it, expect  } from "vitest";
import { compareMinMaxValue, fizzBuzz, makeStringCapitalized } from ".";


// describe('Check for max', () => {
//     it("should return the first argument", () => {
//         expect(compareMinMaxValue(4, 3)).toBe(4)
//     })
//     it("should return the first argument", () => {
//         expect(compareMinMaxValue(120, 21)).toBe(120)
//     })
//     it("should return the first argument", () => {
//         expect(compareMinMaxValue(10456, 0)).toBe(10456)
//     })
//     it("should return the first argument", () => {
//         expect(compareMinMaxValue(21000, 3)).toBe(21000)
//     })
//     it("should return the first argument", () => {
//         expect(compareMinMaxValue(7, 1.5)).toBe(7)
//     })


//     it("should return the second argument", () => {
//         expect(compareMinMaxValue(0, 1.5)).toBe(1.5)
//     })
//     it("should return the second argument", () => {
//         expect(compareMinMaxValue(1200, 1201)).toBe(1201)
//     })
//     it("should return the second argument", () => {
//         expect(compareMinMaxValue(25, 78)).toBe(78)
//     })
//     it("should return the second argument", () => {
//         expect(compareMinMaxValue(89, 350)).toBe(350)
//     })
// })



// describe('Tests for string function', () => {
//     it("Check for right answer", () => {
//         expect(makeStringCapitalized('hello')).toBe("Hello")
//     })
//     it("Check for right answer", () => {
//         expect(makeStringCapitalized('aBaBaBaB')).toBe("Abababab")
//     })
//     it("Check for right answer", () => {
//         expect(makeStringCapitalized('Echo Alfa')).toBe("Echo alfa")
//     })
//     it("Check for right answer", () => {
//         expect(makeStringCapitalized('aBBB')).toBe("Abbb")
//     })
// })


// describe('Check fizzBuzz function', () => {
//     it('test FizzBuzz', () => {
//         expect(fizzBuzz(15)).toBe('FizzBuzz')
//     })
//     it('test FizzBuzz', () => {
//         expect(fizzBuzz(30)).toBe('FizzBuzz')
//     })
//     it('test FizzBuzz', () => {
//         expect(fizzBuzz(45)).toBe('FizzBuzz')
//     })


//     it('test Fizz', () => {
//         expect(fizzBuzz(3)).toBe('Fizz')
//     })
//     it('test Fizz', () => {
//         expect(fizzBuzz(9)).toBe('Fizz')
//     })
//     it('test Fizz', () => {
//         expect(fizzBuzz(99)).toBe('Fizz')
//     })


//     it('test Buzz', () => {
//         expect(fizzBuzz(25)).toBe('Buzz')
//     })
//     it('test Buzz', () => {
//         expect(fizzBuzz(10000)).toBe('Buzz')
//     })
//     it('test Buzz', () => {
//         expect(fizzBuzz(155)).toBe('Buzz')
//     })

//     it('Default case', () => {
//         expect(fizzBuzz(1)).toBe('1')
//     })
//     it('Default case', () => {
//         expect(fizzBuzz(151)).toBe('151')
//     })
//     it('Default case', () => {
//         expect(fizzBuzz(28)).toBe('28')
//     })
// })


// test('test without descibe', () => {
//     expect(makeStringCapitalized('aBa')).toBeDefined()
// })

// it('test without descibe', () => {
//     expect(makeStringCapitalized('aBa')).toBe('Aba')
// })

//TEST OBJECT/ARR

// test('object test', () => {
//     const data = [1,2,3]

//     expect(data).toEqual([1,2,3])
// })

