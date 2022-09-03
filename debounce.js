const debounce = (fn, time) => {
    let timer
    return () => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, time)
    }
    console.log('明天出发杭州')
}
// 明天出发杭州