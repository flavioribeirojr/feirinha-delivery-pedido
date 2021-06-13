import formStyles from '../styles/form.module.css';

export function renderInputClassNameErrors(className, hasError) {
    if (!hasError) {
        return className;
    }

    return `${className} ${formStyles.errored}`;
}

export function ValidationErrorMessage({hasError, errorMessage}) {
    if (!hasError) {
        return null;
    }

    return <p className={formStyles.validationErrorMessage}>{ errorMessage }</p>
}