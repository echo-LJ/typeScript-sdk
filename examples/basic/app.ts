import TsSdk from '../../src/typescript-sdk'

const addResult = TsSdk.add(1, 2)
document.querySelector('.result').innerText = addResult