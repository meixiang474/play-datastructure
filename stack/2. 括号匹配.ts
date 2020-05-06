// leetcode 20

const isValid = (s: string): boolean => {
  const arr: string[] = []
  for(let i = 0; i < s.length; i++){
    if(/[\[\{\(]/.test(s[i])){
      arr.push(s[i])
    }else {
      if(!arr.length) return false
      const top: string = arr.pop()
      if(s[i] === ')' && top !== '(') return false
      if(s[i] === ']' && top !== '[') return false
      if(s[i] === '}' && top !== '{') return false
    }
  }
  return arr.length === 0
}