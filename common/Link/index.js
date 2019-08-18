import { useRouter } from 'next/router'
import classNames from 'classnames';

export default ({ children, href, className, target }) => {
    const router = useRouter();

    const handleClick = e => {
        if (target === '_blank') return;
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} target={target} className={classNames(
            'Link',
            {'Link--active': router.pathname === href},
            className
        )}>
            {children}
        </a>
    )
}