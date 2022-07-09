import React, { useEffect, useState } from 'react'

import styles from './FormRegisterShop.module.scss'

import Input from 'common-components/UI/Input/Input'
import Select from 'common-components/UI/Select/Select'
import Button from 'common-components/UI/Button/Button'

import categoryApi from 'services/category-api/category-api'
import shopAPI from 'services/shop-api/shop-api'
import useSessionStorage from 'hooks/useSessionStorage'

import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function FormRegisterShop() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const [listCate, setListCate] = useSessionStorage('list_cate', [])

    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const { data } = await categoryApi.getCategories()
                setListCate(data.data)
                setIsLoading(false)
            }
            if (listCate.length === 0) {
                fetchData()
            }
        } catch (error) {}
    }, [listCate, setListCate])

    const onSubmit = async (data) => {
        try {
            const result = await shopAPI.registerShop(data)

            console.log(result)
        } catch (error) {
            toast.error(error.message)
        }

        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <header className={styles.header}>ĐĂNG KÝ THÔNG TIN SHOP</header>
            <div className={styles.title}>THÔNG TIN LIÊN HỆ</div>
            <Input
                {...register('shop_name', { required: 'Tên shop là bắt buộc' })}
                label='Tên cửa hàng'
                placeholder='Bee Shop...'
                error={errors.shop_name && errors.shop_name.message}
            />
            <Input
                {...register('contact_name', { required: 'Vui lòng nhập tên liên hệ' })}
                label='Tên chủ cửa hàng'
                placeholder='Nguyen Van A...'
                error={errors.contact_name && errors.contact_name.message}
            />
            <Input
                {...register('contact_phone', {
                    required: 'Vui lòng nhập số điện thoại',
                })}
                type='number'
                label='Số điện thoại liên hệ'
                placeholder='0866500...'
                error={errors.contact_phone && errors.contact_phone.message}
            />
            <Input
                {...register('contact_address', {
                    required: 'Vui lòng nhập địa chỉ cửa hàng',
                })}
                label='Địa chỉ shop'
                placeholder='Ha Noi- Viet Nam'
                error={errors.contact_address && errors.contact_address.message}
            />
            <Select {...register('category')} label='Ngành hàng' listOption={listCate} />
            <div className={styles.policy}>
                <input type='checkbox' required />
                <span>Tôi đã đọc và chấp nhận các điều khoản dịch vụ của Shobee</span>
            </div>
            <Button>Đăng ký shop</Button>
        </form>
    )
}

export default FormRegisterShop
