const equation = document.querySelector("#equation");
const answer = document.querySelector("#answer");

document.querySelectorAll('.calculator-keys button').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const clicked = event.target.id;

        if (clicked === 'C') {
            equation.innerHTML = '0';
            answer.innerHTML = '0';
            return;  
        }

        if (parseInt(equation.innerHTML, 10) === 0) {
            equation.innerHTML = clicked.toString();
            return;
        }

         if (clicked ==='.') {
            const splitted = equation.innerHTML.split('');
            
            if (splitted.indexOf('.') === -1) {
                equation.innerHTML += clicked;
                return;
            }
            return false;
        }
        if (clicked ==='0')  {
            equation.innerHTML = '0';
            answer.innerHTML = '0';
            return;
        }
     
        
       if (clicked === '=') {
            try {
                answer.innerHTML = eval(equation.innerHTML.toString());
            } catch (e) {
                return console.log('Error');
            }
            return;
        }
        
        

        equation.innerHTML += clicked;
        return;
        
    });
});

