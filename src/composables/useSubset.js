export const useSubset = () => {
  // 子集生成函数, 传入数组arr，返回所有子集的列表
  const subSetFn = arr => {
    function backtrack(start, path) {
      // 将当前路径（子集）添加到结果列表中，如果路径不为空
      if (path.length > 0) {
        result.push([...path])
      }

      // 从start开始遍历数组
      for (let i = start; i < arr.length; i++) {
        // 将当前元素添加到路径中
        path.push(arr[i])
        // 递归调用，继续生成子集
        backtrack(i + 1, path)
        // 回溯，移除最后一个元素
        path.pop()
      }
    }

    let result = []
    backtrack(0, [])
    return result
  }
  return {
    subSetFn
  }
}
