/*
 * @Date: 2022-01-13 14:41:29
 * @LastEditors: 曾令宇
 * @FilePath: /project-enigma-demo/scripts/postinstall.js
 */
'use strict'

const shell = require('shelljs')
const _path = require('path')
const cwd = process.cwd()
const { cd, exec } = shell
const resolve = (...dir) => _path.resolve(cwd, ...dir)
const main = async () => {
    cd(resolve())
    await _exec('git submodule init')
    await _exec('git submodule update')
    cd(resolve('project-enigma-core'))
    await _exec('yarn link')
    cd(resolve())
    await _exec('yarn link project-enigma-core')
}
const _exec = (command, opt) => {
    return new Promise((res, rej) => {
        exec(command, opt, (code, out, err) => {
            res({ code, out, err })
        })
    }).catch(err => {
        console.error(`执行失败：${err}`)
        process.exit();
    })
}
main();