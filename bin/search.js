#!/usr/bin/env node

import brainwallet from 'brainwallet'

const secret = process.argv[2] || 'abadf8c4ca8910c74af0525c92b8c8d0aa38d9bf' // acegod

// console.log(secret)

var start = 'a'
var end = 'd'

// var search = ['5ee7d8d3d53bb955414c279e644c882777fd52c3'] // abcd
// var search = ['5dc6f805e07a573deffd486cb47fdfad598abc07'] // abcdd
var search = [secret] // adbcdd


var ascii = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const len = ascii.length
const chars = 5


function generateCyhper(i, chars, ascii, len) {
  if (chars === 2) {
    var c1 = i % len
    i = i - c1
    i = i / len
    var c2 = i % len
    return '' + ascii[c2] + ascii[c1]
  }
  if (chars === 3) {
    var c1 = i % len
    i = i - c1
    i = i / len
    var c2 = i % len
    i = i - c2
    i = i / len
    var c3 = i % len
    return '' + ascii[c3] + ascii[c2] + ascii[c1]
  }
  if (chars === 4) {
    var c1 = i % len
    i = i - c1
    i = i / len
    var c2 = i % len
    i = i - c2
    i = i / len
    var c3 = i % len
    i = i - c3
    i = i / len
    var c4 = i % len
    return '' + ascii[c4] + ascii[c3] + ascii[c2] + ascii[c1]
  }
  if (chars === 5) {
    var c1 = i % len
    i = i - c1
    i = i / len
    var c2 = i % len
    i = i - c2
    i = i / len
    var c3 = i % len
    i = i - c3
    i = i / len
    var c4 = i % len
    i = i - c4
    i = i / len
    var c5 = i % len
    return '' + ascii[c5] + ascii[c4] + ascii[c3] + ascii[c2] + ascii[c1]
  }
  if (chars === 6) {
    var c1 = i % len
    i = i - c1
    i = i / len
    var c2 = i % len
    i = i - c2
    i = i / len
    var c3 = i % len
    i = i - c3
    i = i / len
    var c4 = i % len
    i = i - c4
    i = i / len
    var c5 = i % len
    i = i - c5
    i = i / len
    var c6 = i % len
    return '' + ascii[c6] + ascii[c5] + ascii[c4] + ascii[c3] + ascii[c2] + ascii[c1]
  }
}

for (var i = 0; i < len ** chars; i++) {
  var cypher = generateCyhper(i, chars, ascii, len)
  const secret = start + cypher + end
  // console.log(secret)
  const ret = await brainwallet(secret)
  if (ret === search[0]) {
    console.log('########found', secret, ret, i)
    process.exit(-1)
  }

}

