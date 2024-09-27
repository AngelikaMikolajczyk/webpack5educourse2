import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'hello world';
       
        
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'you clicked the button!';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;