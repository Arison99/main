import "./Categories.css";

function Categories({ children }) {
  return (
    <div>
      <section className="menu">{children}</section>
    </div>
  );
}

export default Categories;
