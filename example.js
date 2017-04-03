'use strict'

var nock = require('./index')

var f = [8, [1, 0], 8, [1, 6, [5, [0, 7], 4, 0, 6], [0, 6], 9, 2, [0, 2], [4, 0, 6], 0, 7], 9, 2, 0, 1]

console.log('decrementing 42')
console.time('dec1')
console.log('result: ' + nock.nock(42, f))
console.timeEnd('dec1')
console.log()

console.log('decrementing 42 (from a string formula)')
console.time('dec2')
f = "[7 [1 42] 7 [0 1] 8 [1 0] 8 [1 6 [5 [0 7] 4 0 6] [0 6] 9 2 [0 2] [4 0 6] 0 7] 9 2 0 1]"
console.log('result: ' + nock.nock(f))
console.timeEnd('dec2')
console.log()

// TODO
console.time('foo')
f = '[8 [[7 [0 1] 8 [1 1 97 98 99 0] 9 2 0 1] 7 [0 1] 8 [1 1 99 100 101 0] 9 2 0 1] 8 [1 6 [5 [1 0] 0 12] [0 13] [0 24] 9 2 [0 2] [[0 25] 0 13] 0 7] 9 2 0 1]'
console.log(nock.nock(f).toString())
console.timeEnd('foo')
console.log()

console.log('~taglux')

// http://urbit.org/fora/posts/~2017.2.14..09.04.35..6983~/
console.time('add')
f = '[8 [1 0] [8 [1 [6 [5 [0 15] [0 6]] [0 14] [9 2 [[0 2] [[4 [0 6]] [[4 [0 14]] [0 15]]]]]]] [9 2 [0 1]]]]'
console.log(nock.nock([23, 45], f))
console.timeEnd('add')
console.log()

// http://urbit.org/fora/posts/~2017.3.4..02.50.15..10d2~/
console.time('add2')
f = '[8 [[1 [1 [6 [5 [0 13] [0 14]] [0 12] [9 2 [[0 2] [[4 [0 12]] [0 13]] [[4 [0 14]] [0 15]]]]]] [1 0] [0 1]] [1 0]] [8 [9 2 [0 2]] [9 2 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock([23, 45], f))
console.timeEnd('add2')
console.log()

// http://urbit.org/fora/posts/~2017.3.4..06.04.28..6c91~/
console.time('gth')
f = '[8 [[1 [[[1 [6 [5 [0 14] [0 15]] [1 1] [9 5 [[0 2] [[0 6] [[0 6] [0 15]]]]]]] [1 [6 [5 [4 [0 28]] [0 13]] [1 1] [6 [5 [4 [0 29]] [0 12]] [1 0] [9 5 [[0 2] [[0 6] [[[4 [0 28]] [4 [0 29]]] [0 15]]]]]]]]] [[[1 0] [1 0]] [0 1]]]] [1 0]] [8 [9 2 [0 2]] [9 4 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock([23, 45], f))
console.timeEnd('gth')
console.log()


// http://urbit.org/fora/posts/~2017.2.14..10.03.53..81fa~/
console.time('mul')
f = '[8 [[1 0] [[1 0] [1 0]]] [8 [1 [6 [5 [0 15] [0 27]] [0 12] [9 5 [[0 2] [[[0 12] [[0 26] [4 [0 27]]]] [0 7]]]]] [6 [5 [0 14] [0 26]] [9 4 [[0 2] [[[0 12] [[1 0] [0 27]]] [0 7]]]] [9 5 [[0 2] [[[4 [0 12]] [[4 [0 26]] [0 27]]] [0 7]]]]]] [9 4 [0 1]]]]'
console.log(nock.nock([23, 45], f))
console.timeEnd('mul')
console.log()

// http://urbit.org/fora/posts/~2017.3.4..04.39.10..b9b9~/
console.time('mul2')
f = '[8 [[[1 [[1 [8 [9 5 [0 15]] [6 [5 [0 29] [0 61]] [0 60] [9 2 [[0 6] [0 14] [[[9 2 [[0 4] [[[0 60] [0 28]] [0 5]]]] [4 [0 61]]] [0 31]]]]]]] [[[1 0] [1 0]] [0 1]]]] [1 [1 [6 [5 [0 13] [0 14]] [0 12] [9 2 [[0 2] [[4 [0 12]] [0 13]] [[4 [0 14]] [0 15]]]]]] [1 0] [0 1]]] [1 0]] [8 [9 4 [0 2]] [9 2 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock([23, 45], f))
console.timeEnd('mul2')
console.log()

// max the stack -- any bigger and it overflows
console.time('mul2big')
console.log(nock.nock([1000, 706], f))
console.timeEnd('mul2big')
console.log()

// http://urbit.org/fora/posts/~2017.3.5..03.25.27..f42e~/
console.time('pri')
f = '[8 [[[[[1 [[[1 [8 [9 9 [0 15]] [8 [9 17 [0 31]] [6 [5 [0 30] [1 0]] [1 1] [6 [5 [0 30] [1 1]] [1 1] [6 [5 [0 30] [1 2]] [1 0] [6 [5 [0 30] [1 3]] [1 0] [9 29 [0 1]]]]]]]]] [1 [6 [5 [9 2 [[0 12] [[0 62] [0 13]]]] [0 30]] [1 1] [6 [5 [4 [0 125]] [0 30]] [6 [9 4 [[0 4] [[[9 2 [[0 12] [[0 62] [0 13]]]] [0 30]] [0 5]]]] [1 0] [9 29 [[0 2] [[0 6] [[0 14] [[0 30] [[[4 [0 124]] [0 125]] [0 63]]]]]]]] [6 [9 4 [[0 4] [[[9 2 [[0 12] [[0 62] [0 13]]]] [0 30]] [0 5]]]] [9 29 [[0 2] [[0 6] [[0 14] [[0 30] [[[1 2] [4 [0 125]]] [0 63]]]]]]] [9 29 [[0 2] [[0 6] [[0 14] [[0 30] [[[4 [0 124]] [0 125]] [0 63]]]]]]]]]]]] [[[1 2] [1 2]] [0 1]]]] [1 [[[1 [6 [5 [0 14] [0 15]] [1 1] [9 5 [[0 2] [[0 6] [[0 6] [0 15]]]]]]] [1 [6 [5 [4 [0 28]] [0 13]] [1 1] [6 [5 [4 [0 29]] [0 12]] [1 0] [9 5 [[0 2] [[0 6] [[[4 [0 28]] [4 [0 29]]] [0 15]]]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [[1 [8 [9 5 [0 15]] [6 [5 [0 29] [0 61]] [0 60] [9 2 [[0 6] [0 14] [[[9 2 [[0 4] [[[0 60] [0 28]] [0 5]]]] [4 [0 61]]] [0 31]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [1 [6 [5 [0 13] [0 14]] [0 12] [9 2 [[0 2] [[4 [0 12]] [0 13]] [[4 [0 14]] [0 15]]]]]] [1 0] [0 1]]] [1 0]] [8 [9 16 [0 2]] [9 4 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock(83, f))
console.timeEnd('pri')
console.log()

// http://urbit.org/fora/posts/~2017.3.12..05.37.44..7d5e~/
console.time('gbc')
f = '[8 [[[[[[[[[[1 [[[1 [8 [9 513 [0 7]] [6 [5 [0 14] [1 0]] [9 13 [0 1]] [9 4 [[0 4] [0 14] [0 5]]]]]] [1 [6 [5 [9 4 [[0 4] [0 14] [0 5]]] [1 0]] [0 14] [9 13 [[0 2] [0 6] [4 [4 [0 14]]] [0 15]]]]]] [0 1]]] [1 [[[1 [8 [9 257 [0 15]] [8 [9 17 [0 31]] [8 [9 65 [0 63]] [8 [9 129 [0 127]] [6 [9 4 [[0 28] [[[1 3] [0 126]] [0 29]]]] [1 1] [6 [9 2 [[0 4] [[0 126] [0 5]]]] [9 125 [[0 2] [0 6] [0 14] [0 30] [0 62] [0 126] [[0 508] [9 2 [[0 60] [9 2 [[0 60] [0 126] [0 61]]] [0 61]]]] [0 255]]] [1 1]]]]]]]] [1 [6 [9 2 [[0 12] [0 254] [0 13]]] [[0 254] [1 1]] [6 [5 [4 [4 [0 508]]] [0 126]] [1 0] [9 125 [[0 2] [0 6] [0 14] [0 30] [0 62] [0 126] [[4 [0 508]] [9 2 [[0 60] [0 509] [0 61]]]] [0 255]]]]]]] [[[1 2] [1 0]] [0 1]]]]] [1 [[1 [6 [5 [4 [0 14]] [0 6]] [0 14] [9 2 [[0 2] [[0 6] [[4 [0 14]] [0 15]]]]]]] [[1 0] [0 1]]]]] [1 [[1 [6 [5 [0 28] [0 6]] [1 0] [6 [5 [0 29] [0 6]] [1 1] [9 2 [[0 2] [[0 6] [[[4 [4 [0 28]]] [4 [4 [0 29]]]] [0 15]]]]]]]] [[[1 0] [1 1]] [0 1]]]]] [1 [[1 [8 [9 33 [0 7]] [6 [9 4 [[0 4] [0 28] [0 5]]] [6 [9 4 [[0 4] [0 29] [0 5]]] [1 0] [1 1]] [1 1]]]] [0 1]]]] [1 [[[1 [8 [9 9 [0 15]] [8 [9 17 [0 31]] [8 [9 129 [0 63]] [6 [5 [0 62] [1 0]] [1 1] [6 [5 [0 62] [1 1]] [1 1] [6 [5 [0 62] [1 2]] [1 0] [6 [5 [0 62] [1 3]] [1 0] [6 [9 2 [[0 4] [0 62] [0 5]]] [1 1] [9 61 [0 1]]]]]]]]]]] [1 [6 [5 [9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [1 1] [6 [5 [4 [0 253]] [0 62]] [6 [9 4 [[0 12] [[[9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [0 13]]]] [1 0] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[4 [0 252]] [0 253]] [0 127]]]] [6 [9 4 [[0 12] [[[9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [0 13]]]] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[1 2] [4 [0 253]]] [0 127]]] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[4 [0 252]] [0 253]] [0 127]]]]]]]] [[[1 2] [1 2]] [0 1]]]]] [1 [[[1 [6 [5 [0 14] [0 15]] [1 1] [9 5 [[0 2] [[0 6] [[0 6] [0 15]]]]]]] [1 [6 [5 [4 [0 28]] [0 13]] [1 1] [6 [5 [4 [0 29]] [0 12]] [1 0] [9 5 [[0 2] [[0 6] [[[4 [0 28]] [4 [0 29]]] [0 15]]]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [[1 [8 [9 5 [0 15]] [6 [5 [0 29] [0 61]] [0 60] [9 2 [[0 6] [0 14] [[[9 2 [[0 4] [[[0 60] [0 28]] [0 5]]]] [4 [0 61]]] [0 31]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [1 [6 [5 [0 13] [0 14]] [0 12] [9 2 [[0 2] [[4 [0 12]] [0 13]] [[4 [0 14]] [0 15]]]]]] [1 0] [0 1]]] [1 0]] [8 [9 512 [0 2]] [9 4 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock(120, f).toString())
console.timeEnd('gbc')
console.log()

// http://urbit.org/fora/posts/~2017.3.12..07.53.29..7d94~/
console.time('gbc2')
f = '[8 [[[[[[[[[[1 [[[1 [8 [9 513 [0 7]] [6 [5 [0 14] [1 0]] [9 13 [0 1]] [9 4 [[0 4] [0 14] [0 5]]]]]] [1 [6 [5 [9 4 [[0 4] [0 14] [0 5]]] [1 0]] [0 14] [9 13 [[0 2] [0 6] [4 [4 [0 14]]] [0 15]]]]]] [0 1]]] [1 [[[1 [8 [9 257 [0 15]] [8 [9 17 [0 31]] [8 [9 65 [0 63]] [8 [9 129 [0 127]] [6 [9 4 [[0 28] [[[1 3] [0 126]] [0 29]]]] [1 1] [6 [9 2 [[0 4] [[0 126] [0 5]]]] [9 125 [[0 2] [0 6] [0 14] [0 30] [0 62] [0 126] [[0 508] [9 2 [[0 60] [9 2 [[0 60] [0 126] [0 61]]] [0 61]]]] [0 255]]] [1 1]]]]]]]] [1 [6 [9 2 [[0 12] [0 254] [0 13]]] [[0 254] [1 1]] [6 [5 [4 [4 [0 508]]] [0 126]] [1 0] [9 125 [[0 2] [0 6] [0 14] [0 30] [0 62] [0 126] [[4 [0 508]] [9 2 [[0 60] [0 509] [0 61]]]] [0 255]]]]]]] [[[1 2] [1 0]] [0 1]]]]] [1 [[1 [6 [5 [4 [0 14]] [0 6]] [0 14] [9 2 [[0 2] [[0 6] [[4 [0 14]] [0 15]]]]]]] [[1 0] [0 1]]]]] [1 [[1 [6 [5 [0 28] [0 6]] [1 0] [6 [5 [0 29] [0 6]] [1 1] [9 2 [[0 2] [[0 6] [[[4 [4 [0 28]]] [4 [4 [0 29]]]] [0 15]]]]]]]] [[[1 0] [1 1]] [0 1]]]]] [1 [[1 [8 [9 33 [0 7]] [6 [9 4 [[0 4] [0 28] [0 5]]] [6 [9 4 [[0 4] [0 29] [0 5]]] [1 0] [1 1]] [1 1]]]] [0 1]]]] [1 [[[1 [8 [9 9 [0 15]] [8 [9 17 [0 31]] [8 [9 129 [0 63]] [6 [5 [0 62] [1 0]] [1 1] [6 [5 [0 62] [1 1]] [1 1] [6 [5 [0 62] [1 2]] [1 0] [6 [5 [0 62] [1 3]] [1 0] [6 [9 2 [[0 4] [0 62] [0 5]]] [1 1] [9 61 [0 1]]]]]]]]]]] [1 [6 [5 [9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [1 1] [6 [5 [4 [0 253]] [0 62]] [6 [9 4 [[0 12] [[[9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [0 13]]]] [1 0] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[4 [0 252]] [0 253]] [0 127]]]] [6 [9 4 [[0 12] [[[9 2 [[0 28] [[0 126] [0 29]]]] [0 62]] [0 13]]]] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[1 2] [4 [0 253]]] [0 127]]] [9 61 [[0 2] [0 6] [0 14] [0 30] [0 62] [[4 [0 252]] [0 253]] [0 127]]]]]]]] [[[1 2] [1 2]] [0 1]]]]] [1 [[[1 [6 [5 [0 14] [0 15]] [1 1] [9 5 [[0 2] [[0 6] [[0 6] [0 15]]]]]]] [1 [6 [5 [4 [0 28]] [0 13]] [1 1] [6 [5 [4 [0 29]] [0 12]] [1 0] [9 5 [[0 2] [[0 6] [[[4 [0 28]] [4 [0 29]]] [0 15]]]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [[1 [8 [9 5 [0 15]] [6 [5 [0 29] [0 61]] [0 60] [9 2 [[0 6] [0 14] [[[9 2 [[0 4] [[[0 60] [0 28]] [0 5]]]] [4 [0 61]]] [0 31]]]]]]] [[[1 0] [1 0]] [0 1]]]]] [1 [1 [6 [5 [0 13] [0 14]] [0 12] [9 2 [[0 2] [[4 [0 12]] [0 13]] [[4 [0 14]] [0 15]]]]]] [1 0] [0 1]]] [1 0]] [8 [9 512 [0 2]] [9 4 [[0 4] [0 7] [0 5]]]]]'
console.log(nock.nock(120, f).toString())
console.timeEnd('gbc2')
