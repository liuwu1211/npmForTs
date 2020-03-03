import { IPerson } from './interface/IPerson'
export const Greeter = (name: string) => `Hello ${name}`
export const SetPerson = (person: IPerson) => {
    return `我叫${person.name},性别${person.sex},今年${person.age}`
}
