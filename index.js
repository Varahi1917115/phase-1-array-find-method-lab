   
function superbowlWin(recordList) {
    const data = recordList.find(record => {
       return record.result === 'W'

       // console.log(record)
   
    });
   console.log (data)
    if (data) {
    return data.year
    }
}
