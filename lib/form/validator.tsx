import { FormValue } from "./form"

interface FormRule {
    name: string
    require?: boolean
    message?: string
    minLength?: number
    maxLength?: number
    regExp?: RegExp
}
type FormRules = Array<FormRule>
interface FormErrors {
    [key: string]: string[]
}
export function noError(errors: any) {
    return !!Object.keys(errors).length
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    const publishFunction = (rule: FormRule) => {
        let errors: any = []
        errors.push(rule.message ? rule.message : '')
        return errors
    }
    const addError = (rule: FormRule) => {
        if (errors[rule.name] === undefined) {
            errors[rule.name] = []
        }
        if (errors[rule.name].length) {
            return
        }
        errors[rule.name].push(publishFunction(rule))
    }
    let errors: any = {}
    rules.map(rule => {
        const value = formValue[rule.name]
        if (rule.require && !value) {
            addError(rule)
        }
        if (rule.minLength) {
            if (value.length < rule.minLength) {
                addError(rule)
            }
        }
        if (rule.maxLength && value.length > rule.maxLength) {
            addError(rule)
        }
        if (rule.regExp) {
            if (!(rule.regExp.test(value))) {
                addError(rule)
            }
        }
    })
    return errors
}
export default Validator