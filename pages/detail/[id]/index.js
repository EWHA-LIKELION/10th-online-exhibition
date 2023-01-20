// 졸프 상세 페이지
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const id = router.query.id;

  return <p>상세 페이지 {id}</p>;
};

export default Detail;
