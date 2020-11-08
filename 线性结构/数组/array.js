/**
 * 数组方法备忘录
 */

let arr = [1, 4, 2, 55, 3, 7, 9, 11];
let arr1 = [6, 8, 11, 22, 99, 100];
let arr2 = [1, 2];


// 数字后带星号表示暂未使用过的

/**
 * ====添加/删除元素===
 * 1. pop/push(元素)   数组尾部删除/增加   
 *                     --操作原数组
 * 
 * 2. shift/unshift(元素)   数组头部删除/增加   
 *                          --操作原数组
 * 
 * 3. splice(index, 删除元素的个数, ...item(要插入的元素))   
 *                                 --操作原数组
 * 
 * 4. slice(start, end)   从start到end处的数据复制到一个新的数组中并返回
 *                        --返回新数组
 * 
 * 5. concat(...item)   复制当前的数组并将参数中的item全部复制
 *                      如果参数是数组，则复制该数组中的所有数据
 *                      --返回新数组
 * 
 * ===查询元素===
 * 1*. indexOf(index)/lastIndexOf(index)   返回该索引处的元素/
 * 
 * 
 * 2. includes(value)   数组是否含有value
 *                      --返回true/false
 * 
 * 3*. find(function)   通过函数过滤元素
 *                     --返回通过条件的第一个元素
 * 
 * 4. filter(function)  通过函数过滤元素
 *                      --返回通过条件的一个数组
 * 
 * ===转换数组===
 * 1. join   数组转换成字符串的方法
 *           --返回一个字符串
 * 
 * 2. reverse   原地颠倒数组
 *              --操作原数组
 * 
 * 3. map(function)   遍历数组，每个元素调用function函数
 *                    --返回新数组
 * 
 * 4. sort(function)   数组排序
 *                     --操作原数组
 * 
 * 5. reduce(function)   累加器函数
 *                       --返回新数组
 */




let a = arr.reduce((a, b) => {
    return a + b;
})
console.log(a);