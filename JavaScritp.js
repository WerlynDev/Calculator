const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const allcleanButtons = document.querySelectorAll('[data-all-clean]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-curret-operand]')


class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement =currentOperandTextElement;

    }
}