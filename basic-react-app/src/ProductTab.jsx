import"./App.css";
import Title from"./Title.jsx";
import Product from"./Product.jsx";





function ProductTab() {

    let options = ["hi - tech ", "durble", "fast"];
     let options2 = {a: "hi - tech", b: "durable", c: "fast"}
    return(
        <>
        <Product title="phone" price={30000} features={options} features2={options2} />
        <Product title = "laptop" price={40000}/>
        <Product title="pen" price={1}/>
        </>
    );
}

export default ProductTab;