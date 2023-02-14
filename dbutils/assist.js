
function formatSqlByObject(items) {
    if (!items) return ""
    let sqlStatement = ""
    let flag = false
    Object.keys(items).forEach((key)=> {
        sqlStatement += `${flag ? ",": "" } ${key}=${items[key]}`
        if (!flag) flag = true
      })
    return sqlStatement
}

function formatSqlByArray(array) { 
    if (!array) return ''
    return array.join(', ')
}


module.exports = {
    formatSqlByObject: formatSqlByObject,
    formatSqlByArray: formatSqlByArray
}