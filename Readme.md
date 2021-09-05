## Repository created while learning Typescript

## Theory 

- Typescript is a superset of Javascript 
i.e Typescript = Javascript + Typechecking

- Since Javascript is a loosely typed language i.e variables and functions can have any data type assigned 
- eg. let name = "jayesh";
here name variable is loosely typed that means it has store any values 
name = 25;
name = false; etc

- Loosely typed language also has its own benefits. but this can become problematic when our project gets very big 
- Then keeping track of every variable and files gets difficult 
- eg our name variable let name = "jayesh"; ... naturally name variable should contain only string values but if someone changes that to name = 5; or name = flase; then javascipt wont throw any errors. it is fine.
- to solve this problem typescript comes into picture 


Static Type checking is very useful to prevent unwanted bugs from comming and also catching bugs in the vs code editor itself

Typescript code is more robust and less error prone 


## To run ts files
- make sure you have typescript installed (`npm i typescript`)
- create a ts file (index.ts) and write some typescript code 
- let name: string = "jayesh"; console.log(name);
- run ` tsc index.ts `
- this will compile ts file to a equivalent js file
- you can also create a custom typescript config file using `tsc --init`