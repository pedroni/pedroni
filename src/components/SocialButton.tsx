import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export const SocialButton = (props: { href: string; icon: IconDefinition; }) => {
    return (
        <a
            href={props.href}
            className={classNames(
                'rounded-lg px-1.5 py-1 transition border border-transparent hover:bg-white/10 hover:border-white/20 hover:text-primary-light'
            )}
        >
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </a>
    );
};
