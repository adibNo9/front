import MainText from '@components/ui/MainText'
import styles from './styles/style.module.scss'
import Form from '@components/form/components/form'

export default function RegisterForm() {
  const handleSubmit = values => {

  }

  const Schema = [
    {
      id: 'group-1',
      type: 'group',
      className: 'w-1/2',
      elements: [
        {
          id: '1',
          name: 'name',
          value: '',
          placeholder: 'نام',
          type: 'text',
          label: 'نام',
          validations: {
            required: 'لطفا نام خود را وارد کنید',
            pattern: {
              value: /^[A-Za-z]*$/i,
              message: 'forms.natioo',
            },
          },
        },
        {
          id: '2',
          name: 'lastname',
          value: '',
          placeholder: 'نام خانوادگی',
          type: 'text',
          label: 'نام خانوادگی',
          validations: {
            required: 'لطفا نام خانوادگی خود را وارد کنید',
            pattern: {
              value: /^[A-Za-z]*$/i,
              message: 'forms.natioo',
            },
          },
        },
        {
          id: '3',
          name: 'nationalCode',
          value: '',
          placeholder: 'کد ملی',
          type: 'text',
          label: 'کد ملی',
          validations: {
            required: 'لطفا کد ملی خود را وارد کنید',
            pattern: {
              value: /^[A-Za-z]*$/i,
              message: 'forms.natioo',
            },
            maxLength: {
              value: 10,
              message: 'forms.natiofsddsfso',
            },
          },
        },
        {
          id: '4',
          name: 'level',
          value: null,
          placeholder: 'رشته و پایه خود را انتخاب کنید',
          type: 'select',
          label: 'رشته و پایه خود را انتخاب کنید',
          options: [
            {
              label: 'ابتدایی',
              value: 0,
            },
            {
              label: 'راهنمایی',
              value: 1,
            },
          ],
        },
        {
          id: '5',
          name: 'mobile',
          value: '',
          placeholder: 'شماره تلفن همراه',
          type: 'text',
          label: 'شماره تلفن همراه',
          validations: {
            pattern: {
              value: /^[0-9]*$/i,
              message: 'forms.natioo',
            },
            maxLength: {
              value: 10,
              message: 'forms.natiofsddsfso',
            },
          },
        },
        {
          id: '6',
          name: 'email',
          value: '',
          placeholder: 'ایمیل',
          type: 'text',
          label: 'ایمیل',
          validations: {
            pattern: {
              value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
              message: 'forms.natioo',
            },
            maxLength: {
              value: 10,
              message: 'forms.natiofsddsfso',
            },
          },
        },
        {
          id: '6',
          name: 'email',
          value: '',
          placeholder: 'ایمیل',
          type: 'text',
          label: 'ایمیل',
          validations: {
            pattern: {
              value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
              message: 'forms.natioo',
            },
            maxLength: {
              value: 10,
              message: 'forms.natiofsddsfso',
            },
          },
        },
        {
          id: '7',
          name: 'acceptRule',
          value: '',
          placeholder: 'شرایط استفاده از خدمات  و قوانین حریم خصوصی',
          type: 'checkbox',
          label: 'شرایط استفاده از خدمات  و قوانین حریم خصوصی',
          validations: {
            required: 'شرایط استفاده از خدمات  و قوانین حریم خصوصی الزامی است',
          },
        },
      ],
    },
  ]

  return (
    <div className={styles['login-form-container']}>
       <Form
          formOptions={{
            mode: 'onChange',
          }}
          schema={Schema}
          onSubmit={handleSubmit}
          primaryButton='تایید اطلاعات و ارسال کد'
      />

      <MainText
        color="black"
        size="12px"
        weight="bold"
        children={'اگر قبلا ثبت نام کردیده اید وارد سامانه شوید'}
      />
    </div>
  )
}
