import * as Yup from 'yup';

export const CustomerInfoValidator = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    phone: Yup.string().required('Campo obrigatório'),
    streetAddress: Yup.string().required('Campo obrigatório'),
    addressNumber: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    zipCode: Yup.string().required('Campo obrigatório'),
    district: Yup.string().required('Campo obrigatório'),
    complement: Yup.string()
});