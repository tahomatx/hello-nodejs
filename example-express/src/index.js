const express = require('express');
const app = express();

app.get('/', (req, res) => {
  
  const texts = [];
  
  texts.push('hello<br />');
  
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      texts.push('hello three!!!<br />');
    } else {
      texts.push(`hello ${i}<br />`);
    }
  }

  res.send(texts.join(''));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
