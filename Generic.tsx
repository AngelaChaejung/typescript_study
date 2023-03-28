function superPrint3<V>(a:V[]){
    return a[0]
}
  
  const f = superPrint3([1, 2, 3, 4]);
  const g = superPrint3([true, false, true]);
  const h = superPrint3(["a", "b", "c"]);
  const i = superPrint3([1, 2, true, false]);
  