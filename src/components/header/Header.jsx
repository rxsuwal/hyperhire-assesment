
import './header.scss';


const Header = (props) => {
    return (
        <header className="com_pg_header">
            <a href='/'><img src='/assets/icon/left_arrow.png' alt='' /></a>
            <strong className='title'>{props.title}</strong>
            <a role="button">
                <img src="/assets/icon/bell.png" alt="" />
            </a>
        </header>
    )
}


export default Header;
