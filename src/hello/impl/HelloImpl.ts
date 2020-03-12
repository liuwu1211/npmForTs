// import { Hello } from "/Users/ark/MyProject/npmForTs/src/hello/Hello";
import { Hello } from "../Hello";

export class HelloImpl implements Hello {
    MyHelloName(name: string) {
        return name;
    }
}