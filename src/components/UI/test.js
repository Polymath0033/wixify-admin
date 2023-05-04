const data = { account_number: 303, account_name: 'olosan' }
let inheritIt = [data];
console.log(inheritIt)
for (const k in data) {
    console.log(data[k])
}
inheritIt.map((b) => console.log(b.account_name))
    // const filter = data.filter(acc => acc.data)
    //     //console.log(filter)
    // for (const a of filter) {
    //     console.log(a)
    // }