import { useFormContext } from 'react-hook-form'
import React, { useMemo } from 'react'
import { ConfigProvider } from 'antd'
import {
  DatePicker as DatePickerJalali,
  JalaliLocaleListener,
} from 'antd-jalali'
import fa_IR from 'antd/lib/locale/fa_IR'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import { FieldProps, DateFieldType } from '@components/form/formTypes'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'

dayjs.extend(jalaliday)
export const DateField: React.FC<FieldProps<DateFieldType>> = ({ field }) => {
  const {
    name,
    className,
    label,
    helper,
    shouldDisplay,
    value,
    disabledYearField,
  } = field

  function disabledYear(current) {
    return current.year() > disabledYearField // disabling 2021
  }

  const { watch, setValue } = useFormContext()
  const errorMessage = useErrorMessage(name)
  const values = watch(name)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true
  }, [values, shouldDisplay])

  const onChange = (date: { format: (arg0: string) => any }) => {
    setValue(name, date?.format('YYYY/MM/DD'), {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  return isVisible ? (
    <div
      className={`flex flex-col justify-between my-5 border-light-200 md:ml-4 ${
        className ?? ' '
      }`}
    >
      <FormControl
        className="flex justify-between my-5 border-light-200 "
        key={'eeee'}
      >
        {!!label && (
          <FormLabel name={name} key={'label-key' + name} label={label} />
        )}
        <ConfigProvider locale={fa_IR} direction="rtl">
          <JalaliLocaleListener />

          <DatePickerJalali
            disabledDate={disabledYear}
            direction="rtl"
            name={name}
            onChange={onChange}
            defaultValue={value}
          />
        </ConfigProvider>
      </FormControl>
      {!!helper && <FormHelper helper={helper} />}
      <FormError error={errorMessage} />
    </div>
  ) : null
}
