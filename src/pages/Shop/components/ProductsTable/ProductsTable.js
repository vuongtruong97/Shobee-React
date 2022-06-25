import React from 'react'
import styles from './ProductsTable.module.scss'
import DivStyle1 from 'common-components/UI/Div/DivStyle1'
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import Checkbox from 'common-components/UI/Checkbox/Checkbox'
import Rating from 'common-components/UI/Rating/Rating'
import numberWithCommas from 'utils/numberWithCommas'

const rootURL = process.env.REACT_APP_BASE_URL

function ProductsTable({ products, ...props }) {
    return (
        <DivStyle1>
            <div className={styles.tableContainer}>
                <h1 className={styles.title}>DANH SÁCH SẢN PHẨM</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    <Checkbox />
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>Hình ảnh</div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Tên sản phẩm
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Giá (VNĐ)
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Kho hàng
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Phân loại
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Đã bán{' '}
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                            <th className={styles.th}>
                                <div className={styles.proper}>
                                    Đánh giá
                                    {true ? <FaSortAmountDown /> : <FaSortAmountUp />}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(
                            ({ name, price, quantity, status, sold, _id, image_url }) => (
                                <tr className={styles.tr} key={_id}>
                                    <td className={styles.td}>
                                        <Checkbox />
                                    </td>
                                    <td className={styles.td}>
                                        <div
                                            className={styles.productImg}
                                            alt='prod'
                                            style={{
                                                backgroundImage: `url(${rootURL}/${image_url}),url('https://cf.shopee.vn/file/46a2a2c810622f314d78455da5e5d926_xhdpi')`,
                                            }}
                                        />
                                    </td>
                                    <td className={styles.td}>{name}</td>
                                    <td className={styles.td}>
                                        {numberWithCommas(price)}
                                    </td>
                                    <td className={styles.td}>{`${quantity}`}</td>
                                    <td className={styles.td}>
                                        <div className={styles.status}>{status}</div>
                                    </td>
                                    <td className={styles.td}>{sold}</td>
                                    <td className={styles.td}>
                                        <Rating
                                            start={0}
                                            fractions={2}
                                            initialRating={3}
                                            readonly
                                        />
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </DivStyle1>
    )
}

export default ProductsTable
