import Nav from "./Nav";

const Layout = ({ footer, children }) => (
    <div className="layout-background">
        <Nav />
        {children}
        <h4>{footer}</h4>
    </div>
);

export default Layout;