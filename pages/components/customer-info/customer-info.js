import { Formik } from 'formik';
import { OrderHeader } from '../order-header/order-header';
import formStyles from '../../../styles/form.module.css';
import styles from './customer-info.module.css';
import { renderInputClassNameErrors, ValidationErrorMessage } from '../../helpers/validation-render';
import { CustomerInfoValidator } from './customer-info.validation';
import InputMask from 'react-input-mask';
import { OrderSteps } from '../../order-steps';
import { useEffect, useState } from 'react';

export function CustomerInfo({ customerInfo, setCustomerInfo, setCurrentStep }) {
    const [ initialValues, setInitialValues ] = useState({
        name: '',
        phone: '',
        streetAddress: '',
        addressNumber: '',
        city: '',
        zipCode: '',
        district: '',
        complement: ''
    });

    useEffect(() => {
        if (customerInfo) {
            setInitialValues(customerInfo);
        }
    }, [customerInfo]);

    function handleSubmit(values) {
        setCustomerInfo(values);
        setCurrentStep(OrderSteps.paymentMethod);
    }

    return (
        <div>
            <OrderHeader
                headerTitle="Informações e Endereço"
                stepNumber={2}
            />

            <Formik
                validateOnBlur
                validationSchema={CustomerInfoValidator}
                onSubmit={handleSubmit}
                enableReinitialize
                initialValues={initialValues}
            >
                {
                    ({ values, handleChange, errors, handleSubmit, touched, handleBlur  }) => (
                        <form className={styles.customerForm} onSubmit={handleSubmit}>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Nome
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.name && touched.name)}
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.name && touched.name} errorMessage={errors.name} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Telefone
                                </label>
                                <InputMask
                                    mask="(99) \99999-9999"
                                    className={renderInputClassNameErrors(formStyles.input, errors.phone && touched.phone)}
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.phone && touched.phone} errorMessage={errors.phone} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Rua
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.streetAddress && touched.streetAddress)}
                                    name="streetAddress"
                                    value={values.streetAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.streetAddress && touched.streetAddress} errorMessage={errors.streetAddress} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Número
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.addressNumber && touched.addressNumber)}
                                    type="tel"
                                    name="addressNumber"
                                    value={values.addressNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.addressNumber && touched.addressNumber} errorMessage={errors.addressNumber} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Bairro
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.district && touched.district)}
                                    name="district"
                                    value={values.district}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.district && touched.district} errorMessage={errors.district} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Cidade
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.city && touched.city)}
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.city && touched.city} errorMessage={errors.city} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    CEP
                                </label>
                                <InputMask
                                    mask="99999-999"
                                    className={renderInputClassNameErrors(formStyles.input, errors.zipCode && touched.zipCode)}
                                    name="zipCode"
                                    value={values.zipCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.zipCode && touched.zipCode} errorMessage={errors.zipCode} />
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.label}>
                                    Complemento
                                </label>
                                <input
                                    className={renderInputClassNameErrors(formStyles.input, errors.complement && touched.complement)}
                                    name="complement"
                                    value={values.complement}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ValidationErrorMessage hasError={errors.complement && touched.complement} errorMessage={errors.complement} />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Selecionar Forma de Pagamento
                            </button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}