# Vue-electron and knex Hello world.

## Description
>A "HelloWorld" of using Vue js with electronjs to create descktop applications. Also using the query build Knex to help with the database.

>In the Project I use a sqlite3 database but it is possible to change it very easily by configuring the knex.
### Using:
[Electron js](electronjs.org)

[Vue js](vuejs.org)

[kenex](kenexjs.org)

[vue-cli plugin electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)

#### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run electron:serve
```

##### Compiles and minifies for production
```
npm run electron:build
```

#### Bugs

```This dependency was not found:  * mssql/package.json in ./node_modules/knex/lib/dialects/mssql/index.js
```
> If this error appears to you, you only need to delete the mssql folder in this directory: Vue - electron-with-knex-Hello-world- / node_modules / knex / lib / dialects 