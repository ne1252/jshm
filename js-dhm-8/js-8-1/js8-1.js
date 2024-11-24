function clonemaker(obj){
    if (obj) {
        let functions = []
        for (const key in obj) {
            if (typeof key === `function`) {
                const copyF = obj[key].bind()
                functions.push({copyF, key})
            }
        }
    const copyO = JSON.parse(JSON.stringify(obj));
        for (const fyc of functions){
            copyO[fyc.key] = fyc.copyF
        }
    }
    console.log(copyO)
    return copyO

}