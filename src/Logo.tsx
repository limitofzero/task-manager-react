const Logo = (props: any) => (
    <img
        alt="Logo"
        width="52px"
        height="52px"
        src={ process.env.PUBLIC_URL + '/logo192.png' }
        {...props}
    />
);

export default Logo;
