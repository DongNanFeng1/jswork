function sort(method){
    let origin=document.getElementById('origin').value 
    let logs
    console.log(method)
    if(method=='bubble'){
        logs=bubbleSort(origin)
    }else if(method=='insert'){
        logs=insertSort(origin)
    }
    showDiv=document.getElementById('Anim')
    logValues = logs.logValues()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
    showDiv.innerHTML=logs
}