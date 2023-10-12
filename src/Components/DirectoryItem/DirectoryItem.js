import { useNavigate } from "react-router-dom";
import "../../assets/styles/DirectoryItem/DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={handleNavigate}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
