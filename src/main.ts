/*
 * @Date: 2022-01-13 15:25:07
 * @LastEditors: 曾令宇
 * @FilePath: /project-enigma-demo/src/main.ts
 */
import { Enigma } from 'project-enigma-core'
function main() {
    const instance = new Enigma()
    console.log(instance.input("IRKHB MWCVE"))
}
main();
