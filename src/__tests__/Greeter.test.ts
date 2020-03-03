import { Greeter, SetPerson } from '../index'
test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl')
})
test('My SetPerson', () => {
    expect(SetPerson({ name: 'Marray', age: 16, sex: '男' })).toBe('我叫Marray,性别男,今年16')
})
