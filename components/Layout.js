import Nav from "./Nav";

const Layout = ({ footer, children }) => (
    <div>
        <Nav />
        {children}
        <h4>{footer}</h4>
    </div>
);

export default Layout;