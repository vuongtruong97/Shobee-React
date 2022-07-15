import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import Checkbox from 'common-components/UI/Checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { AiFillWechat, AiFillShop, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import numberWithCommas from 'utils/numberWithCommas'
import cartAPI from 'services/cart-api/cart-api'

function Cart() {
    const [cart, setCart] = useState([])

    const fetchCartData = async () => {
        try {
            const res = await cartAPI.getCart()
            console.log(res)
            setCart(res.data.data.shop_order_ids)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        try {
            fetchCartData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const modifiedQuantity = async (modified) => {
        try {
            const res = await cartAPI.modified(modified)
            console.log(res)
            fetchCartData()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container' style={{ position: 'relative' }}>
            <div className={styles.cart}>
                <div className={styles.shop_list}>
                    {cart.map((shop) => (
                        <div key={shop.shop_id._id} className={styles.shop}>
                            <div className={styles.head}>
                                <div className={styles.checkbox}>
                                    <Checkbox />
                                </div>
                                <div className={styles.shop_name}>
                                    <AiFillShop /> &nbsp;
                                    <Link to='#'>{shop.shop_id.shop_name}</Link>
                                </div>
                                <button className={styles.chat_btn}>
                                    <AiFillWechat />
                                </button>
                            </div>
                            <div className={styles.list_prod}>
                                {shop.product_briefs.map((prod) => (
                                    <div
                                        key={prod.product_id._id}
                                        className={styles.prod}
                                    >
                                        <div className={styles.checkbox}>
                                            <Checkbox />
                                        </div>
                                        <div className={styles.prod_info}>
                                            <Link to='#'>
                                                <div
                                                    className={styles.prod_img}
                                                    style={{
                                                        backgroundImage: `url(${prod.product_id.image_url})`,
                                                    }}
                                                ></div>
                                            </Link>
                                            <div className={styles.prod_name}>
                                                <Link to='#'>{prod.product_id.name}</Link>
                                            </div>
                                        </div>
                                        <div className={styles.price}>
                                            {numberWithCommas(prod.product_id.price)}
                                            &nbsp;₫
                                        </div>
                                        <div className={styles.quantity}>
                                            <div className={styles.input_quantity}>
                                                <button
                                                    onClick={() => {
                                                        modifiedQuantity({
                                                            shop_id: shop.shop_id._id,
                                                            product_id:
                                                                prod.product_id._id,
                                                            quantity: -1,
                                                        })
                                                    }}
                                                    className={styles.quantity_btn}
                                                >
                                                    <AiOutlineMinus />
                                                </button>
                                                <input
                                                    className={styles.quantity_input}
                                                    defaultValue={prod.quantity}
                                                    key={prod.quantity}
                                                    min='1'
                                                    onChange={(e) => {}}
                                                    onBlur={(e) => {
                                                        modifiedQuantity({
                                                            shop_id: shop.shop_id._id,
                                                            product_id:
                                                                prod.product_id._id,
                                                            quantity:
                                                                e.target.value -
                                                                prod.quantity,
                                                        })
                                                    }}
                                                />
                                                <button
                                                    onClick={() => {
                                                        modifiedQuantity({
                                                            shop_id: shop.shop_id._id,
                                                            product_id:
                                                                prod.product_id._id,
                                                            quantity: 1,
                                                        })
                                                    }}
                                                    className={styles.quantity_btn}
                                                >
                                                    <AiOutlinePlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.total_price}>
                                            {numberWithCommas(
                                                prod.product_id.price * prod.quantity
                                            )}
                                            &nbsp;₫
                                        </div>
                                        <div className={styles.delete}>Delete</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.checkout}>
                <div className={styles.checkbox}>
                    <Checkbox />
                    &nbsp;
                    <span>Chọn tất cả</span>
                </div>
                <div>
                    <b>2</b>&nbsp;sản phẩm
                </div>
                <div>
                    Tổng thanh toán:{' '}
                    <b style={{ color: 'var(--primary)' }}>
                        {numberWithCommas(120000000)}₫
                    </b>
                </div>
                <button className={styles.checkout_btn}>Đặt hàng</button>
            </div>
        </div>
    )
}

export default Cart
