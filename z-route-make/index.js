const path                        = require('path')
const fs                          = require('fs')
const fse                         = require('fs-extra')
const Velocity                    = require('velocityjs')
const { capitalCase, pascalCase } = require('change-case')
const childProcess                = require('child_process')

function pbcopy(data) {
  const proc = childProcess.spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}

////////////////////////////////////////////////////////////////////////////
///////////////// 配置路由 //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
const parentFolder = 'typescript-management'
const parentName   = pascalCase(parentFolder)
const parentTitle  = capitalCase(parentFolder)

const children = [
  // getChildConfig('es6-test-005'),
  // getChildConfig('es6-test-006'),
  // getChildConfig('es6-test-007'),
  // getChildConfig('es6-test-008'),
]

let start = 0
for (let i = 0; i < 20; ++i) {
  let folder = 'typescript-test-' + String(start).padStart(3, '0')
  children.push(getChildConfig(folder))
  start++
}
////////////////////////////////////////////////////////////////////////////

!async function () {

  fse.ensureDirSync(path.resolve(__dirname, `./${parentFolder}`))

  for (let child of children) {

    const context = {
      name: child.name,
    }

    let dir = path.resolve(__dirname, `./${parentFolder}/${child.folder}`)
    fse.ensureDirSync(dir)

    index_vue:{
      const vmString = await pReadTextFile(path.resolve(__dirname, `./templates/index.vue.vm`)) + ''
      const content  = Velocity.render(vmString, context)
      await pWriteTextFile(path.join(dir, `index.vue`), content)
    }
  }

  const icon  = 'el-icon-folder'
  const route = `{
    path: '/${parentFolder}',
    component : Layout,
    redirect  : '/${parentFolder}/${children[0].folder}',
    alwaysShow: true,
    name      : '${parentName}',
    meta      : { title: '${parentTitle}', icon: '${icon}' },
    children  : [${children.map(item => {
    return `
      {
        path     : '${item.folder}',
        component: () => import('@/views/${parentFolder}/${item.folder}/index.vue'),
        name     : '${item.name}',
        meta     : { title  : '${item.title}', noCache: true, },
      }`
  }).join(',')}
    ],
},
`
  console.log(route)
  pbcopy(route)
}()

function pWriteTextFile(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, 'utf8', function (err) {
      if (err) {reject(err)}
      else {resolve()}
    })
  })
}

function pReadTextFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', function (err, data) {
      if (err) {reject(err)}
      else {resolve(data)}
    })
  })
}

function getChildConfig(folder, name, title) {
  return {
    folder: folder,
    name  : name ? name : pascalCase(folder),
    title : title ? title : capitalCase(folder),
  }
}
