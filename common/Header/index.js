import Link from 'common/Link';
import {Header, Title, Links} from 'common/Header/styles';


export default () => (
    <Header>
        <Title>
            <Link href="/">Tyler Scott</Link>
        </Title>

        <Links>
            <Link href="/info">Info</Link>
            <Link href="https://www.facebook.com/tylerscottwilliamsphotography/" target="_blank">F</Link>
            <Link href="/gallery">
                <svg width="16" height="16">
                    <rect width="4" height="4" x="0" y="0" />
                    <rect width="4" height="4" x="6" y="0" />
                    <rect width="4" height="4" x="12" y="0" />

                    <rect width="4" height="4" x="0" y="6" />
                    <rect width="4" height="4" x="6" y="6" />
                    <rect width="4" height="4" x="12" y="6" />

                    <rect width="4" height="4" x="0" y="12" />
                    <rect width="4" height="4" x="6" y="12" />
                    <rect width="4" height="4" x="12" y="12" />
                </svg>
            </Link>
        </Links>
    </Header>
)