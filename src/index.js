/*
 * @Author: zhangqi
 * @Date: 2021-01-05 15:10:46
 * @Description: entrance file
 * @LastEditTime: 2021-01-05 16:14:57
 * @LastEditors: zhangqi
 * @FilePath: /webpack5-starter-ts/src/index.js
 */
import './assets/css/common.scss'

let dom = document.createElement('div');
dom.innerHTML = `<span>inner span</span>`

document.getElementById('app').append(dom)
