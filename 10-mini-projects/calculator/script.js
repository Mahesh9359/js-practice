
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    let currentInput = '';
    let memory = 0;
    let lastCalculation = '';

    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', () => {
        const value = button.innerText;
        const displayValue = display.innerText;

        switch (true) {
          case button.classList.contains('clear'):
            currentInput = '';
            display.innerText = '0';
            history.innerText = '';
            break;

          case button.classList.contains('memory'):
            memory = parseFloat(displayValue) || 0;
            history.innerText = `Memory: ${memory}`;
            setTimeout(() => {
              if (history.innerText === `Memory: ${memory}`) {
                history.innerText = lastCalculation;
              }
            }, 2000);
            break;

          case value === '=':
            try {
              if (currentInput === '') break;
              
              lastCalculation = currentInput + ' =';
              let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
              const result = eval(expression);
              display.innerText = result.toString().slice(0, 12);
              currentInput = result.toString();
              history.innerText = lastCalculation;
            } catch {
              display.innerText = 'Error';
              currentInput = '';
            }
            break;

          default:
            if (displayValue === '0' && !isNaN(value)) {
              currentInput = value;
            } else if (displayValue === 'Error') {
              currentInput = value;
            } else {
              currentInput += value;
            }
            
            display.innerText = currentInput.slice(0, 12);
        }
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      const key = e.key;
      const buttons = document.querySelectorAll('.button');
      
      if (key === 'Enter') {
        document.querySelector('.equal').click();
        return;
      }
      
      if (key === 'Escape') {
        document.querySelector('.clear').click();
        return;
      }
      
      if (key === 'm' || key === 'M') {
        document.querySelector('.memory').click();
        return;
      }
      
      buttons.forEach(button => {
        if (button.innerText === key || 
            (key === '*' && button.innerText === '×') ||
            (key === 'Backspace' && button.innerText === 'AC')) {
          button.click();
          button.classList.add('active');
          setTimeout(() => button.classList.remove('active'), 100);
        }
      });
    });
  