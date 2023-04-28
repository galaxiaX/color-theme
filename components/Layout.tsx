const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full">
      <div className="pt-[80px] pb-[70px]">{children}</div>
    </div>
  );
};

export default Layout;
