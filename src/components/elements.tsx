import Link, { LinkProps } from "next/link"
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react"
import styles from './elements.module.css'

export const Title: FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => <h1 {...props} className={styles.title}/>

export const SubTitle: FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => <h3 {...props} className={styles.subTitle}/>

export const Section: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className, ...props }) => <section {...props} className={[styles.section, className].filter(_class => _class).join(' ')}/>

export const Button: FC<PropsWithChildren<LinkProps>> = (props) => <Link {...props} className={styles.button}/>
