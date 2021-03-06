
// You should implement your task here.

module.exports = function towelSort (matrix) {if((Array.isArray(matrix)) && (matrix.length>0))
    {let arr=[]
     for(let i=0;i<matrix.length;i++)
        {if(i%2==1){arr.push(matrix[i].reverse())}
         else{arr.push(matrix[i])}}
        return ([].concat.apply([], arr))
      }
else{return[]}}