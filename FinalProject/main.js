var cal = {
    disNum: '0',
    firOp: null,
    wait: false,
    op: null,
  };
  

  
  function decimal(dot) 
  {
      if (cal.wait === true) return;
      if (!cal.disNum.includes(dot)) 
      {
          cal.disNum += dot;
        }
    }
  
  function comOp(next) 
  {
      var { firOp, disNum, op } = cal
      var inNum = parseFloat(disNum);
      
      if (op && cal.wait)  
      {
          cal.op = next;
          return;
        }
        
        if (firOp == null) 
        {
            cal.firOp = inNum;
        } 
        else if (op) 
        {
            var curVal = firOp || 0;
            var ans = calculate[op](curVal, inNum);
            cal.disNum = String(ans);
            cal.firOp = ans;
        }
        
        cal.wait = true;
        cal.op = next;
    }
    
    var calculate = {
        '+': (firOp, secOp) => firOp + secOp,
        '-': (firOp, secOp) => firOp - secOp,
        '*': (firOp, secOp) => firOp * secOp,
        '/': (firOp, secOp) => firOp / secOp,
        '=': (firOp, secOp) => secOp,
        'sqrt': (firOp, secOp) => Math.sqrt(cal.disNum),
        'pow': (firOp, secOp) => Math.pow(firOp, secOp),
        'cos': (firOp) => Math.cos(cal.disNum),
        'sin': (firOp) => Math.sin(cal.disNum),
        'tan': (firOp) => Math.tan(cal.disNum)
    };
    
    function clear() 
    {
        cal.disNum = '0';
        cal.firOp = null;
        cal.wait = false;
        cal.op = null;
    }
    function dig(dig) 
    {
        var { disNum, wait } = cal;
    
        if (wait === true)
        {
            cal.disNum = dig;
            cal.wait = false;
          } 
          else 
          {
              cal.disNum = disNum === '0' ? dig : disNum + dig;
          }
      }
    function update() 
    {
        var display = document.querySelector('.disp');
        display.value = cal.disNum;
    }
    
    update();
    
    var cell = document.querySelector('.cells');
    cell.addEventListener('click', (event) => {
    var { target } = event;
    
    if (target.classList.contains('clear')) 
    {
        clear();
        update();
        return;
    }

    if (!target.matches('button')) 
    {
        return;
    }
  
    if (target.classList.contains('op')) 
    {
        comOp(target.value);
        update();
        return;
    }
    
    if (target.classList.contains('dec')) 
    {
        decimal(target.value);
        update();
        return;
    }
  

    
    dig(target.value);
    update();
});