import DashboardIcon from '@components/icons/shop/dashboard-icon'
import React from 'react'

const FormSection: React.FC<any> = (props: any) => {
  return (
    <section className={props.config.className ?? ''}>
      <div
        className={
          'bg-brand-main bg-opacity-10 border-b-2 border-b-brand-main border-opacity-40 rounded-tr-[10px] rounded-tl-[10px] p-4'
        }
      >
        <div className="flex items-center ">
          <DashboardIcon />
          {props.config.name && (
            <span className=" text-brand-main font-bold mx-1">
              {props.config.name}
            </span>
          )}

          {props.config.city && (
            // todo
            <span className=" text-white bg-brand-main font-bold mx-1 px-2 py-1 rounded-lg">
              تهران
            </span>
          )}
        </div>
      </div>
      <div className={'flex flex-col lg:flex-row mx-4 my-4'}>
        {props.children}
      </div>
    </section>
  )
}

export default FormSection
