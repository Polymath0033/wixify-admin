console.log("Halo");
let format_ = new Intl.RelativeTimeFormat('en', { localeMatcher: 'best fit', numeric: 'always', style: 'long' }).format(-1, ' day')
console.log(format_)