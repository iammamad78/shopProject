import { Link, useParams } from "react-router-dom";

import { useProductsDetail } from "../context/ProductsContext";

import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

function DetailsPage() {
  const { id } = useParams();
  const productsDetail = useProductsDetail(id);

  console.log(productsDetail);

  if (!productsDetail) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productsDetail.image} alt={productsDetail.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productsDetail.title}</h3>
        <p className={styles.description}>{productsDetail.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productsDetail.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productsDetail.price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
