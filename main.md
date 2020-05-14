[https://judegiordano.github.io/judegiordano.github.io/subDirTest/main.html](https://judegiordano.github.io/judegiordano.github.io/subDirTest/main.html)

---

## Future Features

Every minute, return timestamp. This will be used to determine whether or not to clear the localstorage cache

```javascript
setInterval(function() {
  var d = new Date();
  console.log(d);
  if (d.getHours() <= 12) {
    var ans = `${d.getHours()}:${d.getMinutes()} am`;
  } else {
    var ans = `${d.getHours() - 12}:${d.getMinutes()} pm`;
  }
  console.log(ans);
  localStorage.setItem("dateTimeStamp", d);
}, 60000);

var lastStamp = localStorage.getItem("dateTimeStamp");
```
