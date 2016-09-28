tsc filename.ts
tsc --target es5 filename.ts
tsc --target es5 filename.ts filename1.ts
tsc --target es5 filename.ts filename1.ts --out out.js
tsc --target es5 filename.ts filename1.ts --module amd|system --out out.js
tsc --target es5 filename.ts -w --out out.js
tsc --target es5 filename.ts filename1.ts --sourcemap --module amd|system --out out.js


#https://github.com/TypeStrong/tsify
browserify filename1.ts -p tsify --debug -o bundle.js
npm