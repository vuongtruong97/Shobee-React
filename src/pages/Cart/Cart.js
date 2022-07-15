<<<<<<< HEAD
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
=======
import React, { useEffect, useRef, useState } from 'react'
import styles from './Cart.module.scss'
import Checkbox from 'common-components/UI/Checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { AiFillWechat, AiFillShop, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import numberWithCommas from 'utils/numberWithCommas'
import cartAPI from 'services/cart-api/cart-api'

function Cart() {
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    const fetchCartData = async () => {
        try {
            const res = await cartAPI.getCart()

            if (res.data.data.shop_order_ids) {
                setCart(res.data.data.shop_order_ids)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // init cart data
    useEffect(() => {
        try {
            fetchCartData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    // modified cart and re-fetch cart data
    const modifiedQuantity = async (modified) => {
        try {
            const res = await cartAPI.modified(modified)
            console.log(res)
            if (res.data.success) {
                fetchCartData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    // check shop select all
    const handleCheckBoxAllShop = (shopId) => {
        const shopInCart = cart.find((shop) => shop.shop_id._id === shopId)
        const shopOrderIndex = orders.findIndex((shop) => shop.shopId === shopId)

        // create list order from cart
        const listOrder = shopInCart.product_briefs.map((prod) => {
            return {
                prodId: prod.product_id._id,
                price: prod.product_id.price,
                quantity: prod.quantity,
            }
        })
        const shopOrder = {
            shopId,
            orders: listOrder,
        }
        // if not exist shop insert new shoporder to orders
        if (shopOrderIndex === -1) {
            orders.push(shopOrder)
            return setOrders([...orders])
        }
        // if exist shop replace with full shop order
        if (shopInCart.product_briefs.length > orders[shopOrderIndex].orders.length) {
            orders.splice(shopOrderIndex, 1)
            orders[shopOrderIndex] = shopOrder
            return setOrders([...orders])
        }
        // if full shop order ==> remove out of orders
        if (shopInCart.product_briefs.length === orders[shopOrderIndex].orders.length) {
            orders.splice(shopOrderIndex, 1)
            return setOrders([...orders])
        }
    }

    // compute order
    const handleCheckBoxProd = (data) => {
        const shopIndex = orders.findIndex((order) => order.shopId === data.shopId)
        //not exist shop
        if (shopIndex === -1) {
            orders.push({ shopId: data.shopId, orders: [data.prodInfo] })
            return setOrders([...orders])
        }
        // exist shop
        if (shopIndex !== -1) {
            const prodIndex = orders[shopIndex].orders.findIndex(
                (order) => order.prodId === data.prodInfo.prodId
            )
            //net exist prod
            if (prodIndex === -1) {
                orders[shopIndex].orders.push(data.prodInfo)
            }
            //exist prod
            if (prodIndex !== -1) {
                const newOrders = orders[shopIndex].orders.filter(
                    (order) => order.prodId !== data.prodInfo.prodId
                )
                if (newOrders.length === 0) {
                    // clear empty shop
                    orders.splice(shopIndex, 1)
                } else {
                    orders[shopIndex].orders = newOrders
                }
            }
            return setOrders([...orders])
        }
    }

    const handleCheckedCheckBox = (shopId, prodId) => {
        const shop = orders.find((shop) => shop.shopId === shopId)
        if (!shop) return false
        const exist = shop.orders.some((order) => order.prodId === prodId)
        return !!exist
    }

    const handleCheckedCheckAllShop = (shopId) => {
        const shopInCart = cart.find((shop) => shop.shop_id._id === shopId)
        const shopInOrders = orders.find((shop) => shop.shopId === shopId)

        if (!shopInOrders) return false

        if (shopInCart.product_briefs.length === shopInOrders.orders.length) {
            return true
        }
    }

    return (
        <div className='container' style={{ position: 'relative' }}>
            <div className={styles.cart}>
                <div className={styles.shop_list}>
                    {cart.map((shop, i) => (
                        <div key={shop.shop_id._id} className={styles.shop}>
                            <div className={styles.head}>
                                <div className={styles.checkbox}>
                                    <Checkbox
                                        checked={handleCheckedCheckAllShop(
                                            shop.shop_id._id
                                        )}
                                        onChange={() => {
                                            handleCheckBoxAllShop(shop.shop_id._id)
                                        }}
                                    />
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
                                            <Checkbox
                                                checked={handleCheckedCheckBox(
                                                    shop.shop_id._id,
                                                    prod.product_id._id
                                                )}
                                                id={prod.product_id._id}
                                                onChange={() => {
                                                    handleCheckBoxProd({
                                                        shopId: shop.shop_id._id,
                                                        prodInfo: {
                                                            prodId: prod.product_id._id,
                                                            quantity: prod.quantity,
                                                            price: prod.product_id.price,
                                                        },
                                                    })
                                                }}
                                            />
                                        </div>
                                        <div className={styles.prod_info}>
                                            <Link to='#'>
                                                <div
                                                    className={styles.prod_img}
                                                    style={{
                                                        backgroundImage: `url(${
                                                            prod.product_id.image_urls &&
                                                            prod.product_id.image_urls[0]
                                                        })`,
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
                                            <b>
                                                {numberWithCommas(
                                                    prod.product_id.price * prod.quantity
                                                )}
                                                &nbsp;₫
                                            </b>
                                        </div>
                                        <div className={styles.delete}>Xoá</div>
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
>>>>>>> 08311cd13073a4a2c5c27195e5a1a692c8df7a62
