import TsSdk from '../../dist/typescript-sdk.umd'

const addResult = TsSdk.add(1, 2)
console.log(TsSdk, addResult)
document.querySelector('.result').innerText = addResult