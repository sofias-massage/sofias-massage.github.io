import { FC, PropsWithChildren } from 'react'
import styles from './banner.module.css'

type BannerProps = PropsWithChildren

const Banner: FC<BannerProps> = ({ children }) => <div className={styles.banner}>{children}</div>

export default Banner
